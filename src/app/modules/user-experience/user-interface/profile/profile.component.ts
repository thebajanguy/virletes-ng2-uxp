import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Profile } from "@app_modules_useridentity/models/authentication.models";

@Component({
  selector: "app-user-workbench-profile-wxp",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public currentDate: Date = new Date();

  profile!: Profile;
  displayedColumns: string[] = ['claim', 'value'];
  dataSource: any = [];
  apiScopes: string[] = ['claim', 'value'];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    debugger;
    this.currentDate = new Date();
    console.log('ProfileComponent: ' + this.currentDate );
    this.getProfileData();
  }
  getProfileData() {
    debugger;
    let apiAccessToken = localStorage.getItem('b2c.accessToken');
    console.log('getProfileData: apiAccessToken ' + apiAccessToken);

    let userProfile = localStorage.getItem('local.authenticated.user');
    console.log('getProfileData: userProfile ' + apiAccessToken);
    debugger;

    //this.profile.id = userProfile.
    //{"id":"1aff90e5-f1d4-4983-ba85-54650cb7cb0f","country":"","email":"","mobilePhone":"","preferredLanguage":"","userPrincipalName":"","timeZone":"","avatar":"/assets/no-profile-photo.png"}
  }

}
