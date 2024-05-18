// MODULES
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
//import { AgmCoreModule } from '@agm/core';
// import { NgxGalleryModule } from 'ngx-gallery';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

// DECLARATIONS
import { PricingComponent } from './pricing.component';
//
//
import { AthletePlanComponent} from './plans/athlete-plan.component';
import { CollegePlanComponent } from './plans/college-plan.component';
import { TeamPlanComponent } from './plans/team-plan.component';
import { DescriptionBodyComponent } from './description/description-body.component';
import { DescriptionHeaderComponent } from './description/description-header.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        //AgmCoreModule.forRoot({
        //    apiKey: 'NO_API_KEY'
        //}),
        // NgxGalleryModule,
        RouterModule,
        HttpClientModule

    ],
    declarations: [
        PricingComponent,
        DescriptionHeaderComponent,
        DescriptionBodyComponent,
        AthletePlanComponent,
        CollegePlanComponent,
        TeamPlanComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    exports: [PricingComponent]

})
export class PricingModule { }
