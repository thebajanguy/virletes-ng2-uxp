
import { Injectable, Injector, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable, Subscription, of, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GlobalService {
    public isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _location: Location;
    private _httpClient: HttpClient;
    public options: any;

    constructor(
        httpClient: HttpClient,
        location: Location,
        private router: Router,
        private titleService: Title
    ) {
        this._location = location;
        this._httpClient = httpClient;
    }

    public get AlertOption(): any {
        return this.options = {
            autoClose: false,
            keepAfterRouteChange: false
        };
    }
    public get XFunctionsKey() {
        const tempId = this.generator();
        return tempId;
    }
    private generator(): string {
        const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;
        return isString;
    }
    private S4(): string {
        // tslint:disable-next-line: no-bitwise
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    public get IsDev(): boolean {
        console.log(environment.production);
        return environment.production ; // this.Hostname.includes('localhost');
    }

/************* APP SETTINGS **************************/
    public get EmailSentTo(): string {
        return environment.appSettings.emailSentTo;
    }
    public get ApplicationName(): string {
        return environment.appSettings.applicationName;
    }
    public get Hostname(): string {
        return window.location.hostname;
    }
    public get UrlOrgin(): string {
        return location.origin;
    }
    public SetPageTitle(page: string) {

        // let title = this.titleService.getTitle();
        let pageTitle = environment.appSettings.pageTitle;
        let application = environment.appSettings.applicationName;

        console.log('current title:::::' + this.titleService.getTitle());

        this.titleService.setTitle(pageTitle + ' | ' + application + ' | ' + page);

        console.log('after title:::::' + this.titleService.getTitle());

        //debugger;
    }
/************* GET API URLS **************************/
    public get MediaApi(): string {
        return environment.apis.mediaApi;
    }
    public get CorrespondenceApi(): string {
        return environment.apis.correspondenceApi;
    }

    public get DefaultProfileImageUrl(): string {
        return '/assets/img/icons/ipaas_vector.png';
    }
/************* LOG IN - LOG OUT METHODS **************************/
    public Logout() {
        sessionStorage.removeItem('CurrentUser');
        sessionStorage.removeItem('LoggedIn');
        sessionStorage.removeItem('ProfileImage');
        sessionStorage.removeItem('UserProfile');
        //
        this.isLoggedInSubject.next(false);
        // this.userProfileSubject.next(null);
        console.log('Logout - successful');
        // tslint:disable-next-line: no-debugger
        this.router.navigate(['/identity/account/login']);
    }

/*********** ERROR HANDLING **************************************/
    public handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
        } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
