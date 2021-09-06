import { StorageService } from './storage.service';
// tslint:disable: object-literal-shorthand
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RoutingService } from './routing.service';
import { AuthenticationService } from '../nw-auth/authentication.service';
import { ApiUrl } from '../nw-object/url/url';
import { HighFiveUser } from '../nw-object/hf/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<HighFiveUser> = new BehaviorSubject<HighFiveUser>(null);

  constructor(
    private title: Title,
    private http: HttpClient,
    private routingService: RoutingService,
    private authService: AuthenticationService,
    private storage: StorageService
  ) {}

  public getUser(): Observable<HighFiveUser> {
    return this.user.asObservable();
  }

  public setUser(user: HighFiveUser): void {
    this.user.next(user);
    // this.setTitle();
  }

  public login(uid: string, pswd: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(ApiUrl.USER_LOGIN, { uid: uid, pswd: pswd }, { responseType: 'text' }).subscribe(
        (tk: string) => {
          this.authService.authenticate(tk);
          // this.storeUser();
          this.routingService.reload();
          // this.setTitle();
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public logout(): void {
    this.authService.invalidate();
    // this.unstoreUser();
    this.routingService.reload();
  }
}
