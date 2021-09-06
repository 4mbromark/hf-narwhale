import { Commission } from './../../nw-object/nw/commission';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private commissions: BehaviorSubject<Commission[]> = new BehaviorSubject<Commission[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  public getCommissionList(): Observable<Commission[]> {
    return this.commissions.asObservable();
  }

  public fetch(): void {
    this.http.post(ApiUrl.COMMISSION_FETCH, { }, { responseType: 'json' }).subscribe(
      (commissionList: Commission[]) => {
        this.commissions.next(commissionList);
      },
      (error) => {

      }
    );
  }
}
