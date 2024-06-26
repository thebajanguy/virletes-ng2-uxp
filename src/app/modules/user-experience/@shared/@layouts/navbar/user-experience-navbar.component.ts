import { Component, OnInit, ElementRef, Inject, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IpServiceService } from '@app_modules_core/services/ip-service.service';
import { ToastrMessageService } from '@app_modules_core/toast-message/toast-message.service';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { RedirectRequest, PopupRequest } from '@azure/msal-browser';
import { PromptValue } from '@azure/msal-common';
import { environment } from '@environments/environment';
import { BaseSusiComponent } from '../../../../@user-identity/base/base.susi.component';

@Component({
  selector: "app-user-experience-navbar-cmp",
  templateUrl: "./user-experience-navbar.component.html",
  styleUrls: ["./user-experience-navbar.component.scss"]
})
export class UserExperienceNavbarComponent extends BaseSusiComponent implements OnInit {
  public isCollapsed = false;
  private listTitles: any[] = [];
  private sidebarVisible: boolean;
  private mobile_menu_visible: any = 0;
  private toggleButton: any;
  public override location: Location;
  public override router: Router;

  constructor(
    location: Location,  private element: ElementRef,

    @Inject(MSAL_GUARD_CONFIG) msalGuardConfig: MsalGuardConfiguration,
    authService: MsalService,
    msalBroadcastService: MsalBroadcastService,

    router: Router,
    ip: IpServiceService,
    toastrMessageService: ToastrMessageService

    ) {
      super(location, msalGuardConfig, authService, msalBroadcastService, router, ip, toastrMessageService);

      this.location = location;
      this.router = router;
      this.sidebarVisible = false;
    }

  override ngOnInit() {
    super.ngOnInit() // BaseComponent's method is fired

    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.router.events.subscribe((event) => {
      this.sidebarClose();
       var $layer: any = document.getElementById('bodyClick');
       if ($layer) {
         $layer.remove();
         this.mobile_menu_visible = 0;
       }
   });
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
      for (let i = 0; i < this.listTitles.length; i++) {
          if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
              return this.listTitles[i].title;
          } else if (this.listTitles[i].type === "sub") {
              for (let j = 0; j < this.listTitles[i].children.length; j++) {
                  let subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                  // console.log(subtitle)
                  // console.log(titlee)
                  if (subtitle === titlee) {
                      return this.listTitles[i].children[j].title;
                  }
              }
          }
      }
      return 'Dashboard';
  }
  collapse(){
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    if (this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    }else{
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }

  }
  sidebarOpen() {
      const toggleButton = this.toggleButton;
      const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
      const html = document.getElementsByTagName('html')[0];

      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);

      html.classList.add('nav-open');

      this.sidebarVisible = true;
  };
  sidebarClose() {
      const html = document.getElementsByTagName('html')[0];
      this.toggleButton.classList.remove('toggled');
      const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

      this.sidebarVisible = false;
      html.classList.remove('nav-open');
  };
  sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const html = document.getElementsByTagName('html')[0];
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];

      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
      const html = document.getElementsByTagName('html')[0];

      if (this.mobile_menu_visible == 1) {
          // $('html').removeClass('nav-open');
          var $layer = document.createElement('div');
          html.classList.remove('nav-open');
          if ($layer) {
              $layer.remove();
          }
          setTimeout(function() {
              $toggle.classList.remove('toggled');
          }, 400);

          this.mobile_menu_visible = 0;
      } else {
          setTimeout(function() {
              $toggle.classList.add('toggled');
          }, 430);

          var $layer = document.createElement('div');
          $layer.setAttribute('id', 'bodyClick');


          if (html.getElementsByTagName('body')) {
              document.getElementsByTagName('body')[0].appendChild($layer);
          }

          $layer.onclick = () => { //asign a function
            html.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            setTimeout(function() {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
            const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function(){
                mainPanel.style.position = '';
              }, 500);
            }
          };//.bind(this);

          html.classList.add('nav-open');
          this.mobile_menu_visible = 1;

      }
  };
  //
  signOut(){
    this.logout();
  }

}
