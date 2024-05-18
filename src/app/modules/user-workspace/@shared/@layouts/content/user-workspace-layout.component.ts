
  import { Component, OnInit, AfterViewInit } from "@angular/core";
  import { Observable, Subscription, Subject } from "rxjs";
  import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
  //import 'rxjs/add/operator/filter';
  //import { NavbarComponent } from '../../user-experience/navbar/navbar.component';
  import { Router, NavigationEnd, NavigationStart } from '@angular/router';
  import { filter, takeUntil } from 'rxjs/operators';
  import PerfectScrollbar from 'perfect-scrollbar';

  @Component({
    selector: 'app-user-workspace-layout',
    templateUrl: './user-workspace-layout.component.html',
    styleUrls: ['./user-workspace-layout.component.scss']
    })
  export class UserWorkspaceLayoutComponent implements OnInit, AfterViewInit {
    public _router: Subscription = new Subscription;
    public lastPoppedUrl!: any;
    public yScrollStack: any[] = [];

    constructor( public location: Location, public router: Router) {}

    ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      if (isWindows) {
          // if we are on windows OS we activate the perfectScrollbar function

          document.getElementsByTagName('html')[0].classList.add('perfect-scrollbar-on');
      } else {

          document.getElementsByTagName('html')[0].classList.remove('perfect-scrollbar-off');
      }
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
       this.router.events.subscribe((event:any) => {
          if (event instanceof NavigationStart) {
             if (event.url != this.lastPoppedUrl)
                 this.yScrollStack.push(window.scrollY);
         } else if (event instanceof NavigationEnd) {
             if (event.url == this.lastPoppedUrl) {
                 this.lastPoppedUrl = undefined;
                 window.scrollTo(0, this.yScrollStack.pop());
             } else
                 window.scrollTo(0, 0);
         }
      });
      this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      });

      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          let ps = new PerfectScrollbar(elemMainPanel);
          ps = new PerfectScrollbar(elemSidebar);
      }
    }
    runOnRouteChange(): void {
      if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        const ps = new PerfectScrollbar(elemMainPanel);
        ps.update();
      }
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
