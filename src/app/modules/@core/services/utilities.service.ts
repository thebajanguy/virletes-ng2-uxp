import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Guid } from 'guid-typescript';

import { environment } from '../../../../environments/environment';
import { IpServiceService } from './ip-service.service';

@Injectable({ providedIn: 'root'})
export class UtilitiesService  {

  constructor(private ip: IpServiceService, private location: Location) {}

  public get BaseUrl(): string {
    debugger;
    console.log('BaseUrl:  ' + window.location.origin);
    console.log('window.location.hostname:  ' + window.location.hostname);

    return location.origin;
  }
  public get UrlPath(): string {
    debugger;
    console.log('BaseUrl:  ' + window.location.href);
    console.log('window.location.hostname:  ' + window.location.pathname);
    alert('BaseUrl:  ' + window.location.href);
    alert('window.location.hostname:  ' + window.location.pathname);

    return location.origin;
  }
  public get ApplicationName(): string {
    return environment.appSettings.applicationName;
  }
  public get UserStorageKey(): string {
    return environment.appSettings.localUserStorageKey;
  }
  public get UserTokenKey(): string {
    return environment.appSettings.userTokenKey;
  }
  public get CreateGuid(): Guid {
    let id = Guid.create();
    return id;
  }
  public GetIP()
  {
      this.ip.getIPAddress().subscribe((res:any)=>{
      let ipAddress=res.ip;
      return ipAddress;
      });
  }

}
