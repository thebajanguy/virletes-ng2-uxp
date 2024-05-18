import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { DashboardModule } from "./dashboard/dashboard.module";
import { AccountModule } from "./account/account.module";
import { WorksapceSharedModule } from "./@shared/user-workspace-shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AfterSignupFlowComponent } from "./after-signup-flow/after-signup-flow.component";
import { AfterSignupFlowModule } from "./after-signup-flow/after-signup-flow.module";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
    WorksapceSharedModule, DashboardModule, AccountModule, AfterSignupFlowModule
  ],
  declarations: [],
  exports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserWorkspaceModule {}
