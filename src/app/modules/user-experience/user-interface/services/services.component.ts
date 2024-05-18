import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnDestroy } from '@angular/core';

import {  ChangeDetectionStrategy, ViewEncapsulation, Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-services-uxp',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    public showSubscribeForm = 'TRUE';
    public showContactForm = 'FALSE';

    public showAllPricing = 'TRUE';
    public showAthletePricing = 'FALSE';
    public showCoachPricing = 'FALSE';

    constructor(injector: Injector, private route: ActivatedRoute) {
    }
  
    ngOnInit() {
      const navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('landing-index-page');
    }
    ngOnDestroy() {
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-index-page');
    }
  }
