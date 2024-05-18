  import { Component, OnInit, AfterViewInit } from "@angular/core";
  import { Subscription } from 'rxjs';
  import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
  import { Router, NavigationEnd, NavigationStart } from '@angular/router';
  import PerfectScrollbar from 'perfect-scrollbar';

  @Component({
    selector: 'app-user-experience-layout',
    templateUrl: './user-experience-layout.component.html',
    styleUrls: ['./user-experience-layout.component.scss']
    })
  export class UserExperienceLayoutComponent implements OnInit, AfterViewInit {
    public _router: Subscription | undefined;
    public lastPoppedUrl!: string;
    public yScrollStack: number[] = [];

    constructor( public location: Location, public router: Router) {}

    ngOnInit() {

    }
    runOnRouteChange(): void {
      /*
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        const ps = new PerfectScrollbar(elemMainPanel);
        ps.update();
      }
      */
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
  }
