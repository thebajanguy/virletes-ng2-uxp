import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../../environments/environment'

@Injectable({providedIn: 'root'})
export class LoggingService {

  constructor( private toastrService: ToastrService) {}
  
    /** Log a Service message with the MessageService */
    public loggingInfo(message: string) {
      if (!environment.production) {
        console.log(message);
        //window.alert('LoggerService-log:-  ' + message);
      }
      else {
        // TODO: send the error to remote logging infrastructure
      }
    }
  
    public loggingError(message: string) {
      if (!environment.production) {
        console.error(message);
        //window.alert('LoggerService-log:-  ' + message);
      }
      else {
        // TODO: send the error to remote logging infrastructure
      }
    }

    public loggingWarning(message: string) {
      if (!environment.production) {
        console.warn(message);
        //window.alert('LoggerService-log:-  ' + message);
      }
      else {
        // TODO: send the error to remote logging infrastructure
      }
    }
  
    /*
    public showSuccess(title: string, message: string) {
      this.toastrService.success(message, title)
      .onTap
      .subscribe(() => this.toasterClickedHandler());
      this.logInfo(message);
    }
    public showError(title: string, message: string) {
      this.toastrService.error(message, title)
      .onTap
      .subscribe(() => this.toasterClickedHandler());
      this.logError(message);
    }
    toasterClickedHandler() {
      console.log('Toastr clicked');
    }
    //*/
  


}
