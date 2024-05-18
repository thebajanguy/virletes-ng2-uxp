import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { DashboardRouting } from "./dashboard.routing";
import { WorksapceSharedModule } from "../@shared/user-workspace-shared.module";

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule.forChild(DashboardRouting.DashboardRoutes),  WorksapceSharedModule ],
  declarations: [],
  exports: [],
  providers: []
})
export class DashboardModule {}
