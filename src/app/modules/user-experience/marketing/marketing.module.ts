import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MarketingRouting } from "./marketing.routing";
import { UserExperienceSharedModule } from "../@shared/user-experience-shared.module";
import { LandingComponent } from "./landing-page/landing.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MarketingRouting.MarketingRoutes), NgbModule, UserExperienceSharedModule],
  declarations: [ LandingComponent ],
  exports: [  LandingComponent  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

})
export class MarketingModule {}
