import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { ToastrMessageService } from './toast-message.service';
//
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';

//
const iconClasses = {
  error: 'toast-error',
  info: 'toast-info',
  success: 'toast-success',
  warning: 'toast-warning',
};

@NgModule({
  declarations: [ ],
  imports: [CommonModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      tapToDismiss: false,
      enableHtml: true,
      autoDismiss: true,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      iconClasses: iconClasses
    }), 
  ],
  exports: [ToastrModule],
  providers: [ToastrMessageService],
})
export class ToastMessageModule extends EnsureModuleLoadedOnceGuard {    // Ensure that Module is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: ToastMessageModule) {
    super(parentModule);
  }
}

