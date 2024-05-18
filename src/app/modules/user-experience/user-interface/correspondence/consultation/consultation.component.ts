//
// tslint:disable-next-line: max-line-length
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
//
import { Correspondence, } from '../models';
import { CorrespondenceService } from '../services';
import { GlobalService } from '../../../@shared/services/global.service';
import { Lookups } from '../../../@shared/variables';

@Component({
    selector: 'app-consultation-cmp',
    templateUrl: './consultation.component.html',
    styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit, OnDestroy {
    title = 'Schedule a Consultation';

    public Correspondence: Correspondence = new Correspondence;
    public preferredDay: string = 'Preferred Day';
    public preferredTime: string = 'Preferred Time';
    public dateTimeVariable: any;
    public minDate: Date = new Date();

    public lookups: Lookups;
    public emailSentTo: string | null = null;

    public message?: string | null = '';
    public submitted?: boolean | null = false;
    public loading?: boolean | null = false;
    //
    public isRobotSwitch = false;
    //
    preferredDaySelectedItems: any[] = [];
    preferredTimeSelectedItems: any[] = [];
    //
    preferredDayDropdownList: any[] = [];
    preferredDayDropdownSettings = {};
    //
    preferredTimeDropdownList: any[] = [];
    preferredTimeDropdownSettings = {};
    //
    inquirySelectedItems: any[] = [];
    inquiryDropdownList: any[] = [];
    inquiryDropdownSettings = {};
    //
    sizeSelectedItems: any[] = [];
    sizeDropdownList: any[] = [];
    sizeDropdownSettings = {};
    //
    channelSelectedItems: any[] = [];
    channelDropdownList: any[] = [];
    channelDropdownSettings = {};

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
        globalService.SetPageTitle(this.title);


    }
    ngOnInit() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-index-page');
        //debugger
        this.InitializeObjects();
        this.getLookupData();
    }
    ngOnDestroy() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-index-page');
    }



    // Set up required objects
    async InitializeObjects() {
        this.ResetCorrespondence();
        // Set Min date for Preferred Day field
        var preferredDay = document.getElementById("preferredDay");
        preferredDay?.setAttribute("min", new Date().toISOString().split("T")[0]);
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
        this.Correspondence.preferredTime = '';
        this.Correspondence.preferredDay = '';

        this.Correspondence.emailSentTo = '';

    }
    // Load Dropdown Data
    async getLookupData() {
        /* Configure Settings
        // Load Countries
        of(this.lookups.CountriesList()).subscribe(data => {
            this.countriesList = data;
        });
        */
        //debugger

        //
        this.preferredDaySelectedItems = [];
        this.preferredDayDropdownList = [
            { "id": "", "itemName": "DAY *", "category": "All" },
            { "id": "Monday", "itemName": "Monday", "category": "All" },
            { "id": "Tuesday", "itemName": "Tuesday", "category": "All" },
            { "id": "Wednesday", "itemName": "Wednesday", "category": "All" },
            { "id": "Thursday", "itemName": "Thursday", "category": "All" },
            { "id": "Friday", "itemName": "Friday", "category": "All" },
            { "id": "Saturday", "itemName": "Saturday", "category": "All" },
            { "id": "Sunday", "itemName": "Sunday", "category": "All" },
        ];
        this.preferredDayDropdownSettings = {
            singleSelection: true,
            text: "Day",
            enableSearchFilter: true,
            classes: "dropdownlist-bottom",
            lazyLoading: false,
            enableCheckAll: false
        };
        //
        this.preferredTimeSelectedItems = [];
        this.preferredTimeDropdownList = [
            { "id": "", "itemName": "TIME *", "category": "All" },
            { "id": "09:00 AM - 09:30 AM", "itemName": "09:00 AM - 09:30 AM", "category": "All" },
            { "id": "09:30 AM - 10:00 AM", "itemName": "09:30 AM - 10:00 AM", "category": "All" },
            { "id": "10:00 AM - 10:30 AM", "itemName": "10:00 AM - 10:30 AM", "category": "All" },
            { "id": "10:30 AM - 11:30 AM", "itemName": "10:30 AM - 11:30 AM", "category": "All" },
            { "id": "12:00 PM - 12:30 PM", "itemName": "12:00 PM - 12:30 PM", "category": "All" },
            { "id": "12:30 PM - 01:00 PM", "itemName": "12:30 PM - 01:00 PM", "category": "All" },
            { "id": "01:30 AM - 02:00 AM", "itemName": "01:30 PM - 02:00 PM", "category": "All" },
            { "id": "02:00 AM - 02:30 AM", "itemName": "02:00 PM - 02:30 PM", "category": "All" },
            { "id": "02:30 AM - 03:00 AM", "itemName": "02:30 PM - 03:00 PM", "category": "All" },
            { "id": "03:00 AM - 03:30 AM", "itemName": "03:00 PM - 03:30 PM", "category": "All" },
            { "id": "03:30 AM - 04:00 AM", "itemName": "03:30 PM - 04:00 PM", "category": "All" },
            { "id": "04:30 AM - 05:00 AM", "itemName": "04:30 PM - 05:00 PM", "category": "All" },
        ];
        this.preferredTimeDropdownSettings = {
            singleSelection: true,
            text: "TIME *",
            enableSearchFilter: true,
            classes: "dropdownlist-bottom",
            lazyLoading: false,
            enableCheckAll: false
        };
        //
        this.inquirySelectedItems = [];
        this.inquiryDropdownList = [
            { "id": "", "itemName": "INQUIRY TYPE: I AM/I HAVE... *", "category": "All" },
            { "id": "General Consultation", "itemName": "General Consultation", "category": "All" },
            { "id": "Proof of Concept", "itemName": "Proof of Concept", "category": "All" },
            { "id": "A Current Client", "itemName": "A Current Client", "category": "All" },
            { "id": "A Prospective Client", "itemName": "A Prospective Client", "category": "All" },
            { "id": "A Prospective Employee", "itemName": "A Prospective Employee", "category": "All" },
            { "id": "Startup Services", "itemName": "Startup Services", "category": "All" },
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
        //
        this.sizeSelectedItems = [];
        this.sizeDropdownList = [
            { "id": "", "itemName": "COMPANY SIZE *", "category": "All" },
            { "id": "1 - 10", "itemName": "1 - 10", "category": "All" },
            { "id": "10 +", "itemName": "10 +", "category": "All" },
            { "id": "50 +", "itemName": "50 +", "category": "All" },
            { "id": "100 +", "itemName": "100 +", "category": "All" },
            { "id": "200 +", "itemName": "200 +", "category": "All" },
            { "id": "500 +", "itemName": "500 +", "category": "All" },
        ];
        this.sizeDropdownSettings = {
            singleSelection: true,
            text: "COMPANY SIZE *",
            enableSearchFilter: true,
            classes: "dropdownlist-bottom",
            lazyLoading: false,
            enableCheckAll: false
        };
        //
        this.channelSelectedItems = [];
        this.channelDropdownList = [
            { "id": "", "itemName": "CHANNEL", "category": "All" },
            { "id": "Google", "itemName": "Google", "category": "All" },
            { "id": "Bing", "itemName": "Bing", "category": "All" },
            { "id": "LinkedIn", "itemName": "LinkedIn", "category": "All" },
            { "id": "Facebook", "itemName": "Facebook", "category": "All" },
            { "id": "Instagram", "itemName": "Instagram", "category": "All" },
            { "id": "Twitter", "itemName": "Twitter", "category": "All" },
            { "id": "Other", "itemName": "Other", "category": "All" },
        ];
        this.channelDropdownSettings = {
            singleSelection: true,
            text: "CHANNEL",
            enableSearchFilter: true,
            classes: "dropdownlist-bottom",
            lazyLoading: false,
            enableCheckAll: false
        };


    }
    async onConsultationFormSubmit(model: any, valid?: boolean) {

        this.submitted = true;
        this.loading = true;

        if (!valid) {
            alert('Please fill in all fields: First Name, Last Name, Email, Subject and Message');

            this.submitted = false;
            this.loading = false;

            return;
        }

        this.ResetCorrespondence();

        this.Correspondence.firstName = model.firstName;
        this.Correspondence.lastName = model.lastName;

        this.Correspondence.email = model.email;
        this.Correspondence.phoneNumber = model.phoneNumber;

        this.Correspondence.companyName = model.companyName;
        this.Correspondence.jobTitle = model.jobTitle;

        this.Correspondence.industry = model.industry;
        this.Correspondence.companySize = model.companySize;

        this.Correspondence.preferredDay = model.preferredDay;//[0].itemName;
        this.Correspondence.preferredTime = model.preferredTime;//[0].itemName;
        debugger;
        this.Correspondence.subject = model.subject;
        this.Correspondence.message = model.message;

        this.Correspondence.group = 'Consultation';
        this.Correspondence.emailSentTo = this.emailSentTo;

        (await this.CorrespondenceService.CreateAsync(this.Correspondence))
            .subscribe(
                data => {
                    // tslint:disable-next-line: max-line-length
                    var message = 'Success: Thanks for contacting us.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';
                    this.submitted = false;
                    this.loading = false;
                    this.ResetCorrespondence();
                },
                error => {
                    var message = 'Thanks for contacting us.\nAll correspondence will be sent to << ' + this.Correspondence.email + ' >>';
                    console.error(error.message);
                    this.message = 'Problem saving data. Please try again later.'; // error.message;
                    this.submitted = false;
                    this.loading = false;
                    this.ResetCorrespondence();
                });

        return;
    }

    // Dropdown Control Events
    onItemSelect(item: any) {
        console.log("onItemSelect:item: " + item.itemName);
    }
    OnItemDeSelect(item: any) {
        console.log("OnItemDeSelect:item: " + item);
    }
    onSelectAll(items: any) {
        console.log("onSelectAll:item: " + items);
    }
    onDeSelectAll(items: any) {
        console.log("onDeSelectAll:item: " + items);
    }
}

