// ANGULAR MODULES
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// LOCAL COMPONENTS
import { ConsultationComponent, ContactComponent, NewsletterComponent } from './index';
import { CorrespondenceService } from './services/correspondence.service';
import { UserExperienceSharedModule } from '../../@shared/user-experience-shared.module';
//// CUSTOMED SHARED MODULES


@NgModule({
    imports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        RouterModule, UserExperienceSharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    declarations: [
        ConsultationComponent, ContactComponent, NewsletterComponent
    ],
    exports: [
        ConsultationComponent, ContactComponent, NewsletterComponent
    ],
    providers: [
        CorrespondenceService,
    ],

})
export class CorrespondenceModule { }
