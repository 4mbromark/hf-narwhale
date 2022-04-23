import { RoutingUrl } from 'src/app/nw-object/url/url';
import { RoutingService } from 'src/app/nw-service/routing.service';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(
    private authService: AuthenticationService,
    private routingService: RoutingService
  ) { }

  canActivate(): any {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then(() => {
        this.routingService.goTo(RoutingUrl.DASHBOARD);
        resolve(false);
      }).catch(() => {
        resolve(true);
      });
    });
  }
}
