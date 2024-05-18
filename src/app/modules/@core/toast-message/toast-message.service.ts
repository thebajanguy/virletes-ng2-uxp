import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { LoggingService } from '../services/logging.service';

@Injectable({providedIn: 'root'})
export class ToastrMessageService {

  constructor( private toastrService: ToastrService, private loggerService: LoggingService) {}
  
  /**
  * Displays a Toast message.
  *
  * @param {string} message - The message to display.
  * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
  * @return {number} id - Returns the ID for the generated growl
  */
  public showSuccess(title: string, message: string) {
    this.toastrService.success(message, title)
    .onTap
    .subscribe(() => this.toasterClickedHandler());
    this.loggerService.loggingInfo(message);
  }
  public showError(title: string, message: string) {
    this.toastrService.error(message, title)
    .onTap
    .subscribe(() => this.toasterClickedHandler());
    this.loggerService.loggingError(message);
  }
  public showWarning(title: string, message: string) {
    this.toastrService.warning(message, title)
    .onTap
    .subscribe(() => this.toasterClickedHandler());
    this.loggerService.loggingWarning(message);
  }

  toasterClickedHandler() {
    this.loggerService.loggingInfo('Toastr clicked');
  }

}
