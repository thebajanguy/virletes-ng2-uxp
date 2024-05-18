import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { WorksapceSharedModule } from "../@shared/user-workspace-shared.module";
import { AfterSignupFlowRouting } from "./after-signup-flow.routing";


@NgModule({
  imports: [CommonModule, NgbModule, RouterModule.forChild(AfterSignupFlowRouting.AfterSignupFlowRoutes),  WorksapceSharedModule ],
  declarations: [],
  exports: [],
  providers: []
})
export class AfterSignupFlowModule {}
