import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Profile } from '@app_modules_useridentity/models/authentication.models';
import { HttpClient } from '@angular/common/http';
import { MsalService } from '@azure/msal-angular';
/*
@Component({
    selector: 'app-after-signup-flow-modal-uxp',
    templateUrl: 'after-signup-flow.component.html',
    styleUrls: ['after-signup-flow.component.scss'],
    encapsulation: ViewEncapsulation.None
})
*/
@Component({
    selector: 'app-after-signup-flow-modal-uxp',
    templateUrl: 'after-signup-flow.component.html',
    styleUrls: ["./after-signup-flow.component.scss"]
  })
export class AfterSignupFlowComponent implements OnInit {

    public currentDate: Date = new Date();
  
    profile!: Profile;
    displayedColumns: string[] = ['claim', 'value'];
    dataSource: any = [];
    apiScopes: string[] = ['claim', 'value'];
  
  
    constructor(
      private http: HttpClient,
      private authService: MsalService
    ) { }
  
    ngOnInit() {
      debugger;
      this.currentDate = new Date();
      console.log('AccountComponent: ' + this.currentDate );
      this.getProfileData();
    }
    getProfileData() {
      debugger;
      let apiAccessToken = localStorage.getItem('b2c.accessToken');
      console.log('AuthenticationInterceptor:getToken()-result.accessToken: Bearer ' + apiAccessToken);
      console.log('getProfileData: Bearer ' + apiAccessToken);
      debugger;
  
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${apiAccessToken}`);
      headers.append('Content-Type','application/json');
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*');
  
      let userProfile = JSON.parse(JSON.stringify(localStorage.getItem('local.authenticated.user')) );
  
      debugger;
  
      this.profile = userProfile;
      //{"id":"1aff90e5-f1d4-4983-ba85-54650cb7cb0f","country":"","email":"","mobilePhone":"","preferredLanguage":"","userPrincipalName":"","timeZone":"","avatar":"/assets/no-profile-photo.png"}
      debugger;
    }
  
  }