import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermitService {

  private topbarEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private navbarEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private toolbarEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public getTopbarPermit(): Observable<boolean> {
    return this.topbarEnabled.asObservable();
  }
  public getNavbarPermit(): Observable<boolean> {
    return this.navbarEnabled.asObservable();
  }
  public getToolbarPermit(): Observable<boolean> {
    return this.toolbarEnabled.asObservable();
  }

  public setTopbarPermit(permit: boolean): void {
    this.topbarEnabled.next(permit);
  }
  public setNavbarPermit(permit: boolean): void {
    this.navbarEnabled.next(permit);
  }
  public setToolbarPermit(permit: boolean): void {
    this.toolbarEnabled.next(permit);
  }

  public setAllFramePermitTo(permit: boolean): void {
    this.setTopbarPermit(permit);
    this.setNavbarPermit(permit);
    this.setToolbarPermit(permit);
  }
}
