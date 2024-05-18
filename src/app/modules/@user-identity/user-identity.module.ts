import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { UserIdentityRouting } from "./user-identity.routing";
import { UserSusiComponent } from "./susi/susi.component";

import { TokenService } from "./services/token.service";
import { AuthenticationInterceptor } from "./interceptors/authentication/authentication.interceptor";

// MSAL CONFIGURARTION : BEGIN
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';
import { MSALInstanceFactory, MSALGuardConfigFactory, MSALInterceptorConfigFactory } from "./models/authentication.settings";

@NgModule({
 imports: [MsalModule, ReactiveFormsModule, CommonModule, RouterModule.forChild(UserIdentityRouting.UserIdentityRoutes) ],
  declarations: [ UserSusiComponent ],
  exports: [ UserSusiComponent ],

  providers: [
    HttpClientModule,
    TokenService,
    {  provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true,  },
    // BEGIN: MSAL PROVIDERS
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
    { provide: MSAL_INSTANCE, useFactory: MSALInstanceFactory  },
    { provide: MSAL_GUARD_CONFIG, useFactory: MSALGuardConfigFactory  },
    { provide: MSAL_INTERCEPTOR_CONFIG, useFactory: MSALInterceptorConfigFactory  },
    MsalService,
    MsalGuard,
    MsalBroadcastService
    // END: MSAL PROVIDERS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [MsalRedirectComponent]
})
export class UserIdentityModule {}

