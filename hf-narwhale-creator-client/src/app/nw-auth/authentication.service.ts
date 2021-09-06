import { PermitService } from './../nw-service/permit.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '../nw-service/storage.service';
import { LocalStorage } from '../nw-object/storage/storage';
import { HighFiveUser } from '../nw-object/hf/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private permitService: PermitService
  ) { }

  public isAuthenticated(): Promise<HighFiveUser> {
    const token = this.storage.get(LocalStorage.TOKEN);

    return new Promise((resolve, reject) => {
      if (!token) {
        reject();
        return;
      }
      this.http.post('/user/verify', { tk: token }, { responseType: 'json' }).subscribe(
        (user: HighFiveUser) => {
          this.permitService.setAllFramePermitTo(true);
          resolve(user);
        },
        (error: HttpErrorResponse) => {
          this.invalidate();
          reject(error);
        }
      );
    });
  }

  public authenticate(token: string): void {
    this.storage.set(LocalStorage.TOKEN, token);
  }

  public invalidate(): void {
    this.storage.remove(LocalStorage.TOKEN);
  }
}
