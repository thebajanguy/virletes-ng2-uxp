import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MsalService } from "@azure/msal-angular";
import { AuthenticationResult, InteractionType } from "@azure/msal-browser";
import { environment } from "@environments/environment";
import { ResponseType } from "@microsoft/microsoft-graph-client";
import { Profile } from "../../@user-identity/models/authentication.models";
//import { GraphService, ProviderOptions } from "../../@user-identity/services/graph.service";


@Component({
  selector: "app-userworkspace-account-wxp",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {

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
