import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AccountRouting } from "./account.routing";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AccountComponent } from "./account.component";
import { WorksapceSharedModule } from "../@shared/user-workspace-shared.module";


@NgModule({
  imports: [CommonModule, RouterModule.forChild(AccountRouting.AccountRoutes), NgbModule, FormsModule, WorksapceSharedModule ],
  declarations: [ AccountComponent ],
  exports: [ AccountComponent ]
})
export class AccountModule {}
