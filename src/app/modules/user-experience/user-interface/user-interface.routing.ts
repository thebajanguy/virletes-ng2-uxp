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
import { HomeComponent } from './home/home.component';
import { WhoweareComponent } from './who-we-are/who-we-are.component';
import { DataDeletionComponent } from './data-deletion/data-deletion.component';
import { AthleteComponent } from './membership-athlete/membership-athlete.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent, ConsultationComponent } from './correspondence';
import { ProfileComponent } from './profile/profile.component';
import { CollegeCoachComponent } from './membership-college-coach/membership-college-coach.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class UserInterfacedRouting {
  static language = 'en';

  static components = [
    UserExperienceLayoutComponent, UserExperienceFooterComponent, UserExperienceNavbarComponent,
    WhoweareComponent, DataDeletionComponent, HomeComponent, AthleteComponent, CollegeCoachComponent, PrivacyComponent, ServicesComponent,

  ];

  static UserInterfaceRoutes: Routes = [
    {
      path: `virtual-athlete-profiles`,
      component: UserExperienceLayoutComponent,
      children: [
        { path: 'index', component: HomeComponent },
        { path: 'sports-technology-agency', component: WhoweareComponent },
        { path: 'sports-technology-services', component: ServicesComponent },
        { path: 'athletes', component: AthleteComponent },
        { path: 'coaches', component: CollegeCoachComponent },
        { path: 'privacy', component: PrivacyComponent },
        { path: 'data-deletion', component: DataDeletionComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'consultation', component: ConsultationComponent },
        { path: 'profile', component: ProfileComponent }

      ]
  }];
}
