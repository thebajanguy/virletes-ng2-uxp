//
// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
//import 'rxjs/add/operator/filter';
//
import { Correspondence, } from '../models';
import { CorrespondenceService } from '../services';
import { GlobalService } from '../../../@shared/services/global.service';
import { Lookups } from '../../../@shared/variables';
//


@Component({
    selector: 'app-contact-cmp',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']

})
export class ContactComponent implements OnInit, OnDestroy {

    public Correspondence: Correspondence = new Correspondence;

    public lookups: Lookups;
    public emailSentTo: string | null = null;

    inquirySelectedItems: any[] = [];
    inquiryDropdownList: any[] = [];
    inquiryDropdownSettings = {};

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
        this.lookups = Lookups;
        this.emailSentTo = globalService.EmailSentTo;

    }
    ngOnInit() {
        //debugger
        this.InitializeObjects();
        this.getLookupData();
    }
    ngOnDestroy() {
    }

    // Set up required objects
    async InitializeObjects() {
        this.ResetCorrespondence();
    }
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
    // Load Dropdown Data
    async getLookupData() {
        /* Load Countries
        of(this.lookups.CountriesList()).subscribe(data => {
            this.countriesList = data;
        });
        //debugger
        */

        //
        this.inquirySelectedItems = [];
        this.inquiryDropdownList = [
            { "id": "", "itemName": "INQUIRY TYPE: I AM/I HAVE... *", "category": "All" },
            { "id": "General Inquiry", "itemName": "General Inquiry", "category": "All" },
            { "id": "A Current Client", "itemName": "A Current Client", "category": "All" },
            { "id": "A Prospective Client", "itemName": "A Prospective Client", "category": "All" },
            { "id": "A Prospective Employee", "itemName": "A Prospective Employee", "category": "All" },
            { "id": "Other", "itemName": "Other", "category": "All" },
        ];
        this.inquiryDropdownSettings = {
            singleSelection: true,
            text: "Inquiry",
            enableSearchFilter: true,
            classes: "dropdownlist-bottom",
            lazyLoading: false,
            enableCheckAll: false
        };

    }
    // Contact Form Button Event
    async onContactFormSubmit(model: any) {

        this.submitted = true;
        this.loading = true;



        this.ResetCorrespondence();
        this.Correspondence.firstName = model.firstName;
        this.Correspondence.lastName = model.lastName;
        this.Correspondence.email = model.email;
        this.Correspondence.phoneNumber = model.phoneNumber;
        this.Correspondence.subject = model.subject;
        this.Correspondence.message = model.message;
        this.Correspondence.group = 'Information';
        this.Correspondence.emailSentTo = this.emailSentTo;

        (await this.CorrespondenceService.CreateAsync(this.Correspondence))
            .subscribe(
                data => {
                    debugger;

                    // tslint:disable-next-line: max-line-length
                    var message = 'Success: Thanks for contacting us.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';

                    this.submitted = false;
                    this.loading = false;

                    this.ResetCorrespondence();
                },
                error => {
                    var message = 'Thanks for contacting us.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';
                    console.error(error.message);
                    this.message = 'Problem saving data.  Please try again later.'; // error.message;
                    this.submitted = false;
                    this.loading = false;
                    this.ResetCorrespondence();
                });

        return;
    }

    // Dropdown Control Events
    onItemSelect(item: any) {
        console.log(item);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
}

