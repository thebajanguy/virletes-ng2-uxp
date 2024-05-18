import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'virtual-athlete-profiles/index', pathMatch: 'full' },
  // User Identity - signupsignin
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import('../@user-identity/user-identity.module').then(m => m.UserIdentityModule), // Lazy load account module
      }

    ]
  },
  // User Experience - site pages
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import('../user-experience/marketing/marketing.module').then(m => m.MarketingModule), // Lazy load marketing module
      },
      {
        path: "",
        loadChildren: () => import('../user-experience/user-interface/user-interface.module').then(m => m.UserInterfaceModule), // Lazy load user interface module
      }
    ]
  },
  // User Workspace - Pages [Dashboard, Account, After-Signup-Flow]
  {
    path: "",
    children: [
      {
        path: "user-workspace",
        loadChildren: () => import('../user-workspace/dashboard/dashboard.module').then(m => m.DashboardModule), // Lazy load account module
      },
      {
        path: "user-workspace",
        loadChildren: () => import('../user-workspace/account/account.module').then(m => m.AccountModule), // Lazy load account module
      },
      {
        path: "user-workspace",
        loadChildren: () => import('../user-workspace/after-signup-flow/after-signup-flow.module').then(m => m.AfterSignupFlowModule), // Lazy load after signup flow module
      }
    ]
  },
  // Handle Errors
  {
    path: '**',
    redirectTo: 'virtual-athlete-profiles/index'
  }
];

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}

@NgModule({
  imports: [RouterModule.forRoot([...AppRoutes], {useHash: false, enableTracing: false, onSameUrlNavigation: 'reload', ...APP_EXTRA_OPTIONS}),],
  exports: [RouterModule],
  providers: []
})
export class StartupRoutingModule { }
