import { Component, OnInit, OnDestroy, Inject, ChangeDetectionStrategy, ViewEncapsulation, Injector } from "@angular/core";
import { Router,  ActivatedRoute } from "@angular/router";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

//
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, PopupRequest, RedirectRequest, EventMessage, EventType, InteractionType, AccountInfo, SsoSilentRequest } from '@azure/msal-browser';
import { IdTokenClaims, PromptValue } from '@azure/msal-common'

import { Observable, Subscription, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { filter, takeUntil } from 'rxjs/operators';
// AUTHENTICATION
import { IpServiceService } from "../../@core/services/ip-service.service";
import { ToastrMessageService } from "../../@core/toast-message/toast-message.service";
import { User } from "../models/authentication.models";
//import { BaseSusiComponent } from "../base/base.susi.component";
import { environment } from "@environments/environment";
//import { UtilitiesService } from "@app_modules_core/services/utilities.service";
import { clearStorage } from "../utils/storage-utils";

// END: MSAL CONFIGURATION

type IdTokenClaimsWithPolicyId = IdTokenClaims & {
  acr?: string,
  tfp?: string,
};


@Component({
  selector: 'app-base-susi',
    template: ''
})
export class BaseSusiComponent implements OnInit, OnDestroy {
    activeUser:string | undefined;

    loginDisplay = false;
    isIframe = false;
    name: string | undefined;
    accounts: AccountInfo[] = [];

    readonly _destroying$ = new Subject<void>();

    constructor(
       public location: Location,
       @Inject(MSAL_GUARD_CONFIG) public msalGuardConfig: MsalGuardConfiguration,
        public authService: MsalService,
        public msalBroadcastService: MsalBroadcastService,

        public router: Router,
        public  ip: IpServiceService,
        public  toastrMessageService: ToastrMessageService
    ) {
     }

    //
    ngOnInit(): void {
      const navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('landing-index-page');

      // BEGIN: MSAL User Authentication
      this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
      this.setLoginDisplay();
      this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window

      this.msalBroadcastService.msalSubject$
          .pipe(
              filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
          )
          .subscribe((result: EventMessage) => {
              if (this.authService.instance.getAllAccounts().length === 0) {
                  window.location.pathname = "/";
              } else {
                this.setLoginDisplay();
              }
            });

      this.msalBroadcastService.inProgress$
          .pipe(
              filter((status: InteractionStatus) => status === InteractionStatus.None),
              takeUntil(this._destroying$)
          )
          .subscribe(() => {
              this.setLoginDisplay();
              this.checkAndSetActiveAccount();
          })

      this.msalBroadcastService.msalSubject$
        .pipe(
          filter(
            (msg: EventMessage) => msg.eventType === EventType.LOGOUT_SUCCESS
          ),
          takeUntil(this._destroying$)
        )
        .subscribe((result: EventMessage) => {
          this.setLoginDisplay();
          this.checkAndSetActiveAccount();
        });

      this.msalBroadcastService.msalSubject$
          .pipe(
              filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS
                  || msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS
                  || msg.eventType === EventType.SSO_SILENT_SUCCESS),
              takeUntil(this._destroying$)
          )
          .subscribe((result: EventMessage) => {

              let payload = result.payload as AuthenticationResult;
              let idtoken = payload.idTokenClaims as IdTokenClaimsWithPolicyId;

              if (idtoken.acr === environment.b2cPolicies.names.signUpSignIn || idtoken.tfp === environment.b2cPolicies.names.signUpSignIn) {
                  this.authService.instance.setActiveAccount(payload.account);
              }

              /**
               * For the purpose of setting an active account for UI update, we want to consider only the auth response resulting
               * from SUSI flow. "acr" claim in the id token tells us the policy (NOTE: newer policies may use the "tfp" claim instead).
               * To learn more about B2C tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
               */
              if (idtoken.acr === environment.b2cPolicies.names.editProfile || idtoken.tfp === environment.b2cPolicies.names.editProfile) {

                  // retrieve the account from initial sing-in to the app
                  const originalSignInAccount = this.authService.instance.getAllAccounts()
                      .find((account: AccountInfo) =>
                              account.idTokenClaims?.oid === idtoken.oid
                              && account.idTokenClaims?.sub === idtoken.sub
                              && ((account.idTokenClaims as IdTokenClaimsWithPolicyId).acr === environment.b2cPolicies.names.signUpSignIn
                                  || (account.idTokenClaims as IdTokenClaimsWithPolicyId).tfp === environment.b2cPolicies.names.signUpSignIn)
                          );

                  let signUpSignInFlowRequest: SsoSilentRequest = {
                      authority: environment.b2cPolicies.authorities.signUpSignIn.authority,
                      account: originalSignInAccount
                  };

                  // silently login again with the signUpSignIn policy
                  this.authService.ssoSilent(signUpSignInFlowRequest);
              }

              /**
               * Below we are checking if the user is returning from the reset password flow.
               * If so, we will ask the user to reauthenticate with their new password.
               * If you do not want this behavior and prefer your users to stay signed in instead,
               * you can replace the code below with the same pattern used for handling the return from
               * profile edit flow (see above ln. 74-92).
               */
              if (idtoken.acr === environment.b2cPolicies.names.resetPassword || idtoken.tfp === environment.b2cPolicies.names.resetPassword) {
                  let signUpSignInFlowRequest: RedirectRequest | PopupRequest  = {
                      authority: environment.b2cPolicies.authorities.signUpSignIn.authority,
                      scopes: [],
                      prompt: PromptValue.LOGIN // force user to reauthenticate with their new password
                  };

                  this.login(signUpSignInFlowRequest);
              }

              return result;
          });

        this.msalBroadcastService.msalSubject$
            .pipe(
                filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_FAILURE || msg.eventType === EventType.ACQUIRE_TOKEN_FAILURE),
                takeUntil(this._destroying$)
            )
            .subscribe((result: EventMessage) => {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
                if (result.error && result.error.message.indexOf('AADB2C90118') > -1) {
                    let resetPasswordFlowRequest: RedirectRequest | PopupRequest  = {
                        authority: environment.b2cPolicies.authorities.resetPassword.authority,
                        scopes: [],
                    };

                    this.login(resetPasswordFlowRequest);
                };
            });
    }

    setLoginDisplay() {
      this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
      this.name = this.authService.instance.getActiveAccount()
        ? this.authService.instance.getActiveAccount()?.username
        : 'Unknown';
      this.accounts = this.authService.instance.getAllAccounts();
      this.redirectIfIdentityPage();
    }

    private checkAndSetActiveAccount() {
        /**
         * If no active account set but there are accounts signed in, sets first account to active account
         * To use active account set here, subscribe to inProgress$ first in your component
         * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
         */
        let activeAccount = this.authService.instance.getActiveAccount();

        if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
            let accounts = this.authService.instance.getAllAccounts();
            // TODO:  Add code to handle multiple accounts here if needed
            this.authService.instance.setActiveAccount(accounts[0]);
            activeAccount = this.authService.instance.getActiveAccount();

        }

        this.activeUser = activeAccount?.name;
    }
    private redirectIfIdentityPage() {
      //alert("1-LogedIn: " + this.loginDisplay + " --- " + window.location.pathname); //environment.aadB2C.redirectPath
      if(this.loginDisplay && window.location.pathname.includes('identity')){
        //alert("2-LogedIn: " + this.loginDisplay);
        this.router.navigate([environment.aadB2C.loginRedirectPath, {}]);
      }
    }

    private loginRedirect() {
        if (this.msalGuardConfig.authRequest) {
            this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
        } else {
            this.authService.loginRedirect();
        }
    }

    public login(userFlowRequest?: RedirectRequest | PopupRequest) {
      if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
             if (this.msalGuardConfig.authRequest) {
               this.authService
                .loginPopup({ ...this.msalGuardConfig.authRequest, ...userFlowRequest } as PopupRequest)
                .subscribe((response: AuthenticationResult) => {
                  this.authService.instance.setActiveAccount(response.account);
                  let user = this.getAuthenticatedUser(response.account);
                  this.setLoginDisplay();
                  debugger;
                  this.authService.loginRedirect({scopes: [environment.loginRequest.scopes.write[0]]});
                });
             } else {
               this.authService
                .loginPopup(userFlowRequest)
                .subscribe((response: AuthenticationResult) => {
                    this.authService.instance.setActiveAccount(response.account);
                    let user = this.getAuthenticatedUser(response.account);
                    this.setLoginDisplay();
                    debugger;
                    this.authService.loginRedirect({scopes: [environment.loginRequest.scopes.write[0]]});
                  });
             }
         } else {
           debugger;
           if (this.msalGuardConfig.authRequest) {
              this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest, ...userFlowRequest } as RedirectRequest);
            } else {
                this.authService.loginRedirect(userFlowRequest);
              }
        }
    }

    public logout() {
      clearStorage(this.authService.instance.getActiveAccount());

      this.authService.logout({
        account: this.authService.instance.getActiveAccount(),
      });

      /*
      if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
          this.authService.logoutPopup({
            mainWindowRedirectUri: environment.aadB2C.postLogoutRedirectUri
          });
      } else {
          this.authService.logoutRedirect();
      }
      */

    }

    public editProfile() {
      let editProfileFlowRequest: RedirectRequest | PopupRequest  = {
          authority: environment.b2cPolicies.authorities.editProfile.authority,
          scopes: [],
      };
      this.login(editProfileFlowRequest);
      debugger;
    }

    // <getAuthenticatedUserSnippet>
    //private async getAuthenticatedUser(result: { account: { accountIdentifier: string; name: string; idToken: { given_name: string; family_name: string; country: string; }; }; } | null): Promise<User> {
    private getAuthenticatedUser(result : any): User {
      if (!result) {
        let user = JSON.parse(JSON.stringify(localStorage.getItem('local.authenticated.user')) );
        if (user) {
            return user;
        }
        else {
            return new User();
        }
      }

      let user = new User();
      user.id          = result?.idTokenClaims?.oid;
      user.displayName = result?.idTokenClaims?.name;
      user.givenName   = result?.idTokenClaims?.given_name;
      user.surname     = result?.idTokenClaims?.family_name;
      user.country     = ''; //result?.idTokenClaims?.idToken.country;
      user.email       = result?.username; //(result.username) ? result?.idTokenClaims?.emails[0] : '';
      user.mobilePhone = '';
      user.preferredLanguage = '';
      user.userPrincipalName = result?.username;
      user.timeZone    = '';
      user.avatar      = '/assets/no-profile-photo.png';

      localStorage.setItem('local.authenticated.user', JSON.stringify(user));

      /*
      account
      {
        "homeAccountId": "49adcff3-bd50-4706-9464-d4a9f1169cff-b2c_1_signup_signin.a5472f1f-1ab6-482c-92ca-2cd7763e3918",
        "environment": "VirLetesb2c.b2clogin.com",
        "tenantId": "",
        "username": "AlvinBrathwaite@outlook.com",
        "localAccountId": "49adcff3-bd50-4706-9464-d4a9f1169cff",
        "name": "Alvin",
        "idTokenClaims": {
            "exp": 1668310431,
            "nbf": 1668306831,
            "ver": "1.0",
            "iss": "https://VirLetesb2c.b2clogin.com/a5472f1f-1ab6-482c-92ca-2cd7763e3918/v2.0/",
            "sub": "49adcff3-bd50-4706-9464-d4a9f1169cff",
            "aud": "635f135f-ac63-46d7-b71b-1fb4b9057903",
            "nonce": "8eb9ae23-f10b-419f-baf2-deaa1e9cc1a3",
            "iat": 1668306831,
            "auth_time": 1668306830,
            "oid": "49adcff3-bd50-4706-9464-d4a9f1169cff",
            "name": "Alvin",
            "given_name": "Alvin",
            "family_name": "Brathwaite",
            "emails": [
                "AlvinBrathwaite@outlook.com"
            ],
            "tfp": "B2C_1_signup_signin"
        }
      }
      */

      return user;
    }
    // </getAuthenticatedUserSnippet>

    ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
    }

}
