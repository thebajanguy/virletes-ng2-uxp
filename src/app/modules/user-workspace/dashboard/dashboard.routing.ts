import { MsalGuard } from '@azure/msal-angular';

import {  Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserWorkspaceLayoutComponent } from '../@shared/@layouts/content/user-workspace-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: []
})
export class DashboardRouting {
  static components = [ DashboardComponent];
  static DashboardRoutes: Routes = [
    {
      path: '',
      component: UserWorkspaceLayoutComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent//,
          //canActivate: [MsalGuard]
        }
      ]
  }];
}
