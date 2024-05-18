import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,  HttpInterceptor, HttpHeaders} from '@angular/common/http';

//import { catchError, EMPTY, Observable, of, switchMap } from 'rxjs';
//import {firstValueFrom} from 'rxjs';
import { EMPTY, Observable, of} from 'rxjs';

import { MsalInterceptorAuthRequest, MsalInterceptorConfiguration, MsalService, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';
import { InteractionType } from '@azure/msal-browser';
import { DOCUMENT } from '@angular/common';
import { ToastrMessageService } from '@app_modules_core/toast-message/toast-message.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  accessToken: string | null = '';

  constructor(
    private toastMessageService: ToastrMessageService,

    @Inject(MSAL_INTERCEPTOR_CONFIG) private msalInterceptorConfig: MsalInterceptorConfiguration,
    private authService: MsalService,
    private location: Location,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    @Inject(DOCUMENT) document?: any
    ) {
      debugger;
    }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = request;
    debugger;

    if(request.url.indexOf('/api/') !== -1) {
      this.getAccessToken().then(res => {
        this.accessToken = res;
      })

      this.toastMessageService.showSuccess('Authorization', 'Bearer ' + this.accessToken);
      console.log ('Bearer ');
      console.log (this.accessToken);

      if (this.accessToken) {
        authReq = request.clone({
          headers: this.addExtraHeaders(request)
        });
      }
    }
    debugger;

    return next.handle(authReq);
  }

  getAccessToken(): Promise<any> {
    let scopes = [
      'Read.Data',
      'Edit.Data'
    ];

    return this.authService.acquireTokenSilent({scopes, }).toPromise()
      .then((result: any) => {
        this.accessToken = result.accessToken;
        console.log('AuthenticationInterceptor:getToken()-result.accessToken: Bearer ' + result.accessToken);

        if (result.accessToken)
          localStorage.setItem('b2c.accessToken', result.accessToken);

        return result.accessToken;
    });

    // Note: For MSA accounts, include openid scope when calling acquireTokenSilent to return idToken
    /*
    return this.authService.acquireTokenSilent({...authRequest, scopes, account })
    .pipe(
        catchError(() => {
            this.authService.getLogger().error("Interceptor - acquireTokenSilent rejected with error. Invoking interaction to resolve.");
            return this.acquireTokenInteractively(authRequest, scopes);
        }),
        switchMap((result: AuthenticationResult)  => {
            if (!result.accessToken) {
                this.authService.getLogger().error("Interceptor - acquireTokenSilent resolved with null access token. Known issue with B2C tenants, invoking interaction to resolve.");
                return this.acquireTokenInteractively(authRequest, scopes);
            }
            return of(result);
        }),
        switchMap((result: AuthenticationResult) => {
            this.authService.getLogger().verbose("Interceptor - setting authorization headers");
            const headers = req.headers
                .set("Authorization", `Bearer ${result.accessToken}`);

            const requestClone = req.clone({headers});
            return next.handle(requestClone);
        })
    );
    */


  }

  private addExtraHeaders(request: HttpRequest<any>): HttpHeaders {
    let headers = request.headers;// new HttpHeaders();
    headers=headers.append('Content-Type','application/json');
    headers=headers.append('Content-Type','application/x-www-form-urlencoded');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    headers=headers.append('Authorization', `Bearer ${this.accessToken}`);
    return  headers;
  }

  private acquireTokenInteractively(authRequest: MsalInterceptorAuthRequest, scopes: string[]): Observable<AuthenticationResult> {
    if (this.msalInterceptorConfig.interactionType === InteractionType.Popup) {
        this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by popup");
        return this.authService.acquireTokenPopup({ ...authRequest, scopes });
    }
    this.authService.getLogger().verbose("Interceptor - error acquiring token silently, acquiring by redirect");
    const redirectStartPage = window.location.href;
    this.authService.acquireTokenRedirect({...authRequest, scopes, redirectStartPage });
    return EMPTY;
  }
}
