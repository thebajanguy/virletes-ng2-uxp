import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
//
import { StartupComponent } from './startup.component';
import { StartupRoutingModule } from './startup.routing';//
//
import { ApplicationCoreModule } from '../@core/core.module';
//
import { UserIdentityModule } from '../@user-identity/user-identity.module';
import { UserExperienceModule } from '../user-experience/user-experience.module';
import { UserWorkspaceModule } from '../user-workspace/user-workspace.module';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    NgbModule, RouterModule, FormsModule,
    //
    StartupRoutingModule,
    //
    ApplicationCoreModule, UserIdentityModule,
    //
    UserExperienceModule, UserWorkspaceModule
  ],
  providers: [],
  declarations: [ StartupComponent  ],
  bootstrap: [StartupComponent]
})
export class StartupModule { }
