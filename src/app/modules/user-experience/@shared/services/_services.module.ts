// ANGULAR MODULES
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// CUSTOM MODULES
import { ModalsService } from './modals/modals.service';
import { NotificationService } from './notification/notification.service';
import { GlobalService } from './global.service';


@NgModule({
    imports: [CommonModule, NgbModule],
    declarations: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        ModalsService,
        NotificationService,
        GlobalService,
    ],
})
export class ServicesModule { }
