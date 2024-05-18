import { MsalGuard } from '@azure/msal-angular';

import {  Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// SHARED
// LAYOUTS
import { UserExperienceLayoutComponent } from '../@shared/@layouts/content/user-experience-layout.component';
import { UserExperienceFooterComponent } from '../@shared/@layouts/footer/user-experience-footer.component';
import { UserExperienceNavbarComponent } from '../@shared/@layouts/navbar/user-experience-navbar.component';
// UXP
import { LandingComponent } from './landing-page/landing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class MarketingRouting {
  static components = [
    UserExperienceLayoutComponent, UserExperienceFooterComponent, UserExperienceNavbarComponent,
    LandingComponent,
  ];

  static MarketingRoutes: Routes = [
    {
      path: 'virtual-athlete-profiles/promotions',
      component: UserExperienceLayoutComponent,
      children: [
        { path: 'landing', component: LandingComponent }
      ]
  }];
}
