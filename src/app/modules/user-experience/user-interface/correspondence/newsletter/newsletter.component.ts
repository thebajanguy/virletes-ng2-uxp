//
// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/filter';
//
import { Correspondence, } from '../models';
import { CorrespondenceService } from '../services';
import { GlobalService } from '../../../@shared/services/global.service';
import { Lookups } from '../../../@shared/variables';

//
//



@Component({
    selector: 'app-newsletter-cmp',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss']

})
export class NewsletterComponent implements OnInit, OnDestroy {

    public Correspondence: Correspondence = new Correspondence;
    public emailSentTo: string | null = '';

    public message?: string | null = '';
    public submitted?: boolean | null = false;
    public loading?: boolean | null = false;

    //
    public isRobotSwitch = false;
    //

    constructor(
        private router: Router,
        private http: HttpClient,
        private Lookups: Lookups,
        private globalService: GlobalService,
        private CorrespondenceService: CorrespondenceService,
        public fb: UntypedFormBuilder,
        private cd: ChangeDetectorRef
    ) {
        this.emailSentTo = globalService.EmailSentTo;
    }
    ngOnInit() {
        this.InitializeObjects();
    }
    ngOnDestroy() {
    }

    // Set up required objects
    async InitializeObjects() {
        this.ResetCorrespondence();
    }
    // Reset Correspondence Object
    async ResetCorrespondence() {
        this.Correspondence = <Correspondence>{};

        this.Correspondence.firstName = '';
        this.Correspondence.lastName = '';
        this.Correspondence.age = '';
        this.Correspondence.gender = '';

        this.Correspondence.email = '';
        this.Correspondence.phoneNumber = '';

        this.Correspondence.interestedIn = '';
        this.Correspondence.subject = '';
        this.Correspondence.message = '';

        this.Correspondence.country = '';
        this.Correspondence.postalCode = '';

        this.Correspondence.companyName = '';
        this.Correspondence.companySize = '';
        this.Correspondence.jobTitle = '';
        this.Correspondence.industry = '';
        this.Correspondence.preferredDay = '';
        this.Correspondence.preferredTime = '';

        this.Correspondence.emailSentTo = '';
    }

    // Subscribe Form Button Event
    async onSubscribeFormSubmit(model: any) {

        this.submitted = true;
        this.loading = true;


        this.ResetCorrespondence();
        this.Correspondence.firstName = model.firstName;
        this.Correspondence.lastName = model.lastName;
        this.Correspondence.email = model.email;
        this.Correspondence.group = 'Newsletter';

        debugger;

        (await this.CorrespondenceService.CreateAsync(this.Correspondence))
            .subscribe(
                data => {

                    // tslint:disable-next-line: max-line-length
                    var message = 'Success: Thanks for Subscribing to our newsletter.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';

                    this.submitted = false;
                    this.loading = false;

                    this.ResetCorrespondence();
                },
                error => {
                    // tslint:disable-next-line: max-line-length
                    var message = 'Success: Thanks for Subscribing to our newsletter.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';

                    console.error(error.message);
                    this.message = 'Problem saving data.  Please try again later.'; // error.message;
                    this.submitted = false;
                    this.loading = false;

                    this.ResetCorrespondence();
                });
        return;
    }
}

