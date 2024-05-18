// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {

  constructor(private logger: LoggingService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    debugger;
    if (route.data && route.data['preload']) {
        debugger;
        this.logger.loggingInfo('PreloadModulesStrategy-Preloaded: ' + route.path);
        return load();
    } else {
        debugger;
        return of(null);
    }
  }

}
