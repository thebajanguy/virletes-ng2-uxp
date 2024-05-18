import { Injectable, Injector } from '@angular/core';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
 HttpResponse,
 HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { ToastrMessageService } from '../../toast-message/toast-message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

 constructor(private toastService: ToastrMessageService) {}

 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  return next.handle(request)
     .pipe(
       retry(3),
       catchError((error: HttpErrorResponse) => {
         let errorMessage = '';
         
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Client-side error: ${error.error.message}`;
           debugger;
         } else {
           // server-side error
           errorMessage = `Server-side error: ${error.status}\nMessage: ${error.message}`;
           debugger;
         }

         this.toastService.showError('HttpErrorInterceptor-Http Failure',  errorMessage);
         debugger;

         return throwError(errorMessage);
       })
     )
  }

}