import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
//import { DxVectorMapModule, DxPieChartModule } from 'devextreme-angular';


import { UserWorkspaceLayoutComponent } from "./@layouts/content/user-workspace-layout.component";
import { UserWorkspaceFooterComponent } from "./@layouts/footer/user-workspace-footer.component";
import { UserWorkspaceNavbarComponent } from "./@layouts/navbar/user-workspace-navbar.component";
import { UserWorkspaceSidebarComponent } from "./@layouts/sidebar/user-workspace-sidebar.component";
import { FixedPluginComponent } from "./@components/fixed-plugin/fixed-plugin.component";



@NgModule({
  imports: [
    CommonModule, NgbModule, RouterModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule, FormsModule, JwBootstrapSwitchNg2Module, NgbModule//, DxVectorMapModule, DxPieChartModule
   ],
  declarations: [ UserWorkspaceLayoutComponent, UserWorkspaceFooterComponent, UserWorkspaceNavbarComponent, UserWorkspaceSidebarComponent, FixedPluginComponent ],
  exports: [ UserWorkspaceLayoutComponent, UserWorkspaceFooterComponent, UserWorkspaceNavbarComponent, UserWorkspaceSidebarComponent, FixedPluginComponent]
})
export class WorksapceSharedModule {}
