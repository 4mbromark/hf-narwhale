import { LocalStorage } from './../nw-object/storage/storage';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from '../nw-service/storage.service';
import { RoutingService } from '../nw-service/routing.service';
import { UserService } from '../nw-service/user.service';
import { RoutingUrl } from '../nw-object/url/url';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private routingService: RoutingService,
    private storage: StorageService
  ) {}

  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.storage.get(LocalStorage.TOKEN);

    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const path = this.routingService.getUrl() as string;
          if (!path.includes(RoutingUrl.LOGIN_PAGE) && error.status === 401) {
            this.userService.logout();
          }

          return throwError(error);
        }
      )
    );
  }
}
