import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FixedSocialPluginComponent } from "./@components/fixed-social-plugin/fixed-social-plugin.component";
import { UserExperienceLayoutComponent } from "./@layouts/content/user-experience-layout.component";
import { UserExperienceFooterComponent } from "./@layouts/footer/user-experience-footer.component";
import { UserExperienceNavbarComponent } from "./@layouts/navbar/user-experience-navbar.component";
import { PricingModule } from "./@components/pricing/pricing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Lookups } from "./variables/lookup-data";


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule, FormsModule, ReactiveFormsModule, PricingModule ],
  declarations: [
    UserExperienceLayoutComponent, UserExperienceFooterComponent, UserExperienceNavbarComponent,
    FixedSocialPluginComponent,
  ],
  exports: [
    UserExperienceLayoutComponent, UserExperienceFooterComponent, UserExperienceNavbarComponent,
    FixedSocialPluginComponent,
  ],
  schemas: [],
  providers: [Lookups],

})
export class UserExperienceSharedModule {}
