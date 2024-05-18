import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { UserInterfacedRouting } from "./user-interface.routing";
import { HomeComponent } from "./home/home.component";
import { UserExperienceSharedModule } from "../@shared/user-experience-shared.module";
import { PricingModule } from "../@shared/@components/pricing/pricing.module";
import { CorrespondenceModule } from "./correspondence/correspondence.module";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(UserInterfacedRouting.UserInterfaceRoutes), NgbModule, UserExperienceSharedModule, PricingModule, CorrespondenceModule ],
  declarations: [ HomeComponent ],
  exports: [  HomeComponent  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class UserInterfaceModule {}
