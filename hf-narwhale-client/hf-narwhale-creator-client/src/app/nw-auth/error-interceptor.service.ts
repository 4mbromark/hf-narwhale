import { RoutingService } from './../nw-service/routing.service';
// tslint:disable: object-literal-shorthand
import { DisplayErrorComponent } from './../nw-common/display-error/display-error.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorage } from '../nw-object/storage/storage';
import { RoutingUrl } from '../nw-object/url/url';
import { getErrorConfig } from '../nw-common/display-error/display-error.config';
import { StorageService } from '../nw-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private routingService: RoutingService,
    private storage: StorageService,
    private dialog: MatDialog
  ) { }

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.storage.get(LocalStorage.TOKEN);

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const config = getErrorConfig(error.status);

          const path = this.routingService.getUrl() as string;
          if (!path.includes(RoutingUrl.LOGIN_PAGE) && token && config) {
            this.dialog.open(DisplayErrorComponent, {
              width: '450px',
              height: '200px',
              data: {
                config: config,
                error: error.message
              },
              disableClose: true
            });
          }

          return throwError(error);
        }
      )
    );
  }
}
