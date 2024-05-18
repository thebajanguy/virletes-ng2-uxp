import { Component, Inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
import { GlobalService } from '../../../@shared/services/global.service';
import { Correspondence } from '../models';


@Injectable({ providedIn: 'root' })
export class CorrespondenceService {

    public url: string | null = null;
    public applicationName: string | null = null;

    public token?: string | null = null;
    public header: any;
    public httpOptions: any;

    constructor(private httpClient: HttpClient, private globalService: GlobalService) {
        this.httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        const headerSettings: { [name: string]: string | string[]; } = {};
        this.header = new HttpHeaders(headerSettings);

        this.url = globalService.CorrespondenceApi;
        this.applicationName = globalService.ApplicationName;
    }

    async CreateAsync(model: Correspondence) {
        const url = `${this.url}/correspondence`;
        model.applicationName = this.applicationName;

        //alert('CreateAsync(model: Correspondence)-Thanks for Subscribing to our newsletter.  All correspondence will be sent to-model [' + model.email + ']-[' + url+']');
        debugger;
        return this.httpClient.post<Correspondence>(url, model)
            .pipe(map(data => {
                console.log('successful http call');
                return data;
            }));
    }
}
