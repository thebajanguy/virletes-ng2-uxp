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
import { environment } from "@environments/environment";
import { BaseSusiComponent } from "../base/base.susi.component";

// END: MSAL CONFIGURATION

type IdTokenClaimsWithPolicyId = IdTokenClaims & {
  acr?: string,
  tfp?: string,
};


@Component({
  selector: "app-user-account-susi-uxp",
  templateUrl: "./susi.component.html",
  styleUrls: ["./susi.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSusiComponent extends BaseSusiComponent implements OnInit, OnDestroy {
    title = 'Angular 14 B2C Sample - MSAL Angular v2';
    scopes = [...environment.loginRequest.scopes.read, ...environment.loginRequest.scopes.write];

    constructor(
      public override location: Location,
        @Inject(MSAL_GUARD_CONFIG) public override msalGuardConfig: MsalGuardConfiguration,
        public override authService: MsalService,
        public override msalBroadcastService: MsalBroadcastService,

        public override router: Router,
        public override  ip: IpServiceService,
        public override  toastrMessageService: ToastrMessageService

    ) {
      super(location, msalGuardConfig, authService, msalBroadcastService, router, ip, toastrMessageService);
    }
    //
    override ngOnInit(): void {
      super.ngOnInit() // BaseComponent's method is fired
      console.log('UserSusiComponent ngOnInit')
      this.toastrMessageService.showSuccess('SusiComponent-Landing-Success', 'Landing success - UserSusiComponent ngOnInit');

      // ...
    }
    override ngOnDestroy(): void {
      super.ngOnDestroy() // BaseComponent's method is fired
      console.log('UserSusiComponent ngOnDestroy')
      // ...
    }

    //
    signOut(){
      this.logout();
    }
    signIn() {
      this.removeStorageItems();

      let signUpSignInFlowRequest: RedirectRequest | PopupRequest  = {
        authority: environment.b2cPolicies.authorities.signUpSignIn.authority,
        scopes: this.scopes,
        prompt: PromptValue.LOGIN // force user to reauthenticate with their new password
      };
      this.login(signUpSignInFlowRequest)
    }
    signUp() {
      this.removeStorageItems();
     let signUpFlowRequest: RedirectRequest | PopupRequest  = {
        authority: environment.b2cPolicies.authorities.signUp.authority,
        scopes: this.scopes,
        prompt: PromptValue.LOGIN // force user to reauthenticate with their new password
      };
      this.login(signUpFlowRequest)
    }
    removeStorageItems(){
      localStorage.removeItem('local.authenticated.user');
      sessionStorage.removeItem('msal.interaction.status');

    }

}
