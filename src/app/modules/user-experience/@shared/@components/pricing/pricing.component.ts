import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-pricing-cmp',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']

})
export class PricingComponent implements OnInit, OnDestroy {

    @Input() showAllPricing: string | null = 'true';
    @Input() showAthletePricing: string | null = 'false';
    @Input() showCoachPricing: string | null = 'false';
    @Input() showTeamCoachPricing: string | null = 'false';

    public showAll: boolean | null = true;
    public showAthlete: boolean | null = false;
    public showCoach: boolean | null = false;
    public showTeamCoach: boolean | null = false;

    public message?: string | null = '';
    public submitted?: boolean | null = false;
    public loading?: boolean | null = false;


    constructor(
        private router: Router,
        private http: HttpClient,
        public fb: UntypedFormBuilder,
        private cd: ChangeDetectorRef
    ) {
        console.log('started: PricingComponent-constructor entry ... ');
        console.log('this.showAllPricing: ' + this.showAllPricing);
        console.log('this.showAthletePricing: ' + this.showAthletePricing);
        console.log('this.showCoachPricing: ' + this.showCoachPricing);

        console.log('this.showAll: ' + this.showAll);
        console.log('this.showAthlete: ' + this.showAthlete);
        console.log('this.showCoach: ' + this.showCoach);
        console.log('ended: PricingComponent-constructor entry ... ');
        console.log('... ');
    }
    ngOnInit() {
        console.log('started: PricingComponent-ngOnInit entry ... ');
        this.showForms();
        console.log('ended: PricingComponent-ngOnInit entry ... ');
        console.log('... ');
    }
    ngOnDestroy() {
    }


    async showForms() {
        // .toLowerCase()
        this.showAll = (this.showAllPricing && this.showAllPricing.toLowerCase() === 'true') ? true : false;
        this.showAthlete = (this.showAthletePricing && this.showAthletePricing.toLowerCase() === 'true') ? true : false;
        this.showCoach = (this.showCoachPricing && this.showCoachPricing.toLowerCase() === 'true') ? true : false;

        console.log('this.showAllPricing: ' + this.showAllPricing);
        console.log('this.showAthletePricing: ' + this.showAthletePricing);
        console.log('this.showCoachPricing: ' + this.showCoachPricing);

        console.log('this.showAll: ' + this.showAll);
        console.log('this.showAthlete: ' + this.showAthlete);
        console.log('this.showCoach: ' + this.showCoach);
    }

}


