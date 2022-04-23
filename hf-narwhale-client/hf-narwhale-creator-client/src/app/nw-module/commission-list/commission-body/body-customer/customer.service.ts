import { HighFiveUser } from 'src/app/nw-object/hf/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BaseCommissionSectionService } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.service';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/nw-object/nw/customer';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseCommissionSectionService<Customer> {

  private user: ReplaySubject<HighFiveUser> = new ReplaySubject<HighFiveUser>();
  private isp;

  protected getUrl: NarwhaleCSApi = undefined;
  protected insertUrl: NarwhaleCSApi = undefined;
  protected updateUrl: NarwhaleCSApi = undefined;
  protected deleteUrl: NarwhaleCSApi = undefined;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  public getUser(): Observable<HighFiveUser> {
    return this.user.asObservable();
  }

  public getIsp(): Observable<any> {
    return this.isp.asObservable();
  }

  public cleanService(): void {
    this.dataList.next(null);
    this.user.next(null);
    // this.isp.next(null);
    this.loading.next(false);
  }

  public getUserByIdCommission(idCommission: number): Promise<HighFiveUser> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.get(NarwhaleCSApi.CUSTOMER_USER_GET_COMMISSION + idCommission, { responseType: 'json' }).subscribe(
        (user: HighFiveUser) => {
          this.user.next(user);
          this.loading.next(false);
          resolve(user);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  /* public getIspByIdCommission(idCommission: number): Promise<Customer> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.get(this.getUrl + idCommission, { responseType: 'json' }).subscribe(
        (customer: Customer) => {
          this.customer.next(customer);
          this.loading.next(false);
          resolve(customer);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  } */

  protected buildDataToInsert(data: Customer) {
    throw new Error('Method not implemented.');
  }

  protected buildDataToUpdate(data: Customer) {
    throw new Error('Method not implemented.');
  }

  public getUserByIdCustomer(id: number): Promise<HighFiveUser> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.get(NarwhaleCSApi.CUSTOMER_USER_GET_CUSTOMER + id, { responseType: 'json' }).subscribe(
        (user: HighFiveUser) => {
          this.loading.next(false);
          resolve(user);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
