import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-team-plan-cmp',
    templateUrl: './team-plan.component.html',
    styleUrls: ['../pricing.component.scss']

})
export class TeamPlanComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
        private http: HttpClient,
        public fb: UntypedFormBuilder,
        private cd: ChangeDetectorRef
    ) {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}


