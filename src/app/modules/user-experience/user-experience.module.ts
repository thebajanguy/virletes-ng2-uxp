import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//
import { UserInterfaceModule } from "./user-interface/user-interface.module";
import { PricingModule } from './@shared/@components/pricing/pricing.module';
import { CorrespondenceModule } from './user-interface/correspondence/correspondence.module';
import { UserExperienceSharedModule } from './@shared/user-experience-shared.module';
import { MarketingModule } from './marketing/marketing.module';
//

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
    UserInterfaceModule, PricingModule, CorrespondenceModule, UserExperienceSharedModule, MarketingModule
  ],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class UserExperienceModule {}
