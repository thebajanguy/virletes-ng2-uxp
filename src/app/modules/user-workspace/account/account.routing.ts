import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { MsalGuard } from "@azure/msal-angular";
import { UserWorkspaceLayoutComponent } from "../@shared/@layouts/content/user-workspace-layout.component";
import { AccountComponent } from "./account.component";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class AccountRouting {
  static components = [ AccountComponent];
  static AccountRoutes: Routes = [
    {
      path: '',
      component: UserWorkspaceLayoutComponent,
      children: [
        {
          path: 'account',
          component: AccountComponent//,
          //canActivate: [MsalGuard]
        }
      ]
  }];
}
