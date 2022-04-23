import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    /*const timestamp = localStorage.getItem(Config.LOCAL_STORAGE_TIMESTAMP);
    if (timestamp) {
      const date = new Date(timestamp);
      if (date.setDate(date.getDate() + 1) < (new Date())) {
        this.userService.logout();
      } else {
        localStorage.setItem(Config.LOCAL_STORAGE_TIMESTAMP, (new Date()).toString());
      }
    }*/
  }

  get(item: string): string {
    return localStorage.getItem(item);
  }
  getObject(item: string): any {
    return JSON.parse(localStorage.getItem(item));
  }

  set(item: string, value: string): void {
    localStorage.setItem(item, value);
  }
  setObject(item: string, value: any): void {
    localStorage.setItem(item, JSON.stringify(value));
  }

  remove(item: string): void {
    localStorage.removeItem(item);
  }
}
