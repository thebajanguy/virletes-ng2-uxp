import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
// MODULES
import { ToastMessageModule } from './toast-message/toast-message.module';
// INTERCEPTORS
import { HttpErrorInterceptor } from './interceptors/http-error/http-error.interceptor';
// SERVICES
import { ErrorService } from './services/error.service';
import { IpServiceService   } from './services/ip-service.service';
import { LoggingService } from './services/logging.service';
import { UtilitiesService } from './services/utilities.service';

//

@NgModule({
  imports: [CommonModule, HttpClientModule, ToastMessageModule],
  exports: [],
  declarations: [],
  providers: [
    ErrorService, IpServiceService, LoggingService, UtilitiesService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    }
  ]
})
export class ApplicationCoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: ApplicationCoreModule) {
    super(parentModule);
  }
}