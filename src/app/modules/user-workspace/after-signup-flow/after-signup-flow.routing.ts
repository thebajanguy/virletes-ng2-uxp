import { MsalGuard } from '@azure/msal-angular';

import {  Routes } from '@angular/router';
import { UserWorkspaceLayoutComponent } from '../@shared/@layouts/content/user-workspace-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterSignupFlowComponent } from './after-signup-flow.component';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class AfterSignupFlowRouting {
  static components = [ AfterSignupFlowComponent];
  static AfterSignupFlowRoutes: Routes = [
    {
      path: '',
      component: UserWorkspaceLayoutComponent,
      children: [
        {
          path: 'after-signup-flow',
          component: AfterSignupFlowComponent//,
          //canActivate: [MsalGuard]
        }
      ]
  }];
}
