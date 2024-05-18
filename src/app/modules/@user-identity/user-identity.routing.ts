import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';

import {  Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// SHARED
// LAYOUTS
// UXP
import { UserSusiComponent } from './susi/susi.component';
import { FailedComponent } from './failed/failed.component';
import { UserExperienceLayoutComponent } from '../user-experience/@shared/@layouts/content/user-experience-layout.component';
import { UserExperienceFooterComponent } from '../user-experience/@shared/@layouts/footer/user-experience-footer.component';
import { UserExperienceNavbarComponent } from '../user-experience/@shared/@layouts/navbar/user-experience-navbar.component';
import { AuthenticateComponent } from './auth/auth.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class UserIdentityRouting {
  static components = [
    UserExperienceLayoutComponent, UserExperienceFooterComponent, UserExperienceNavbarComponent,
    UserSusiComponent, FailedComponent
  ];

  static UserIdentityRoutes: Routes = [
    {
      path: 'identity/account',
      component: UserExperienceLayoutComponent,
      children: [
        { path: 'susi', component: UserSusiComponent },
        { path: 'login-failed', component: FailedComponent },
        //{ path: 'auth', component: MsalRedirectComponent  }  // Needed for handling redirect after login
        { path: 'auth', component: AuthenticateComponent  }  // Needed for handling redirect after login
      ]
  }];
}
