import { AuthenticationService } from '../authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from 'src/app/nw-service/user.service';
import { RoutingService } from 'src/app/nw-service/routing.service';
import { RoutingUrl } from 'src/app/nw-object/url/url';
import { HighFiveUser } from 'src/app/nw-object/hf/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private routingService: RoutingService
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.authService.isAuthenticated().then((user: HighFiveUser) => {
        this.userService.setUser(user);
        resolve(true);
      }).catch(() => {
        this.routingService.goTo(RoutingUrl.LOGIN_PAGE);
        resolve(false);
      });
    });
  }
}
