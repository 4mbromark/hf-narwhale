import { CommissionStatus } from 'src/app/nw-object/commission/commission-status';
import { Commission } from './../../nw-object/nw/commission';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/app/nw-object/url/url';
import { ListFilters } from './list.config';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private selectedCommission: ReplaySubject<Commission> = new ReplaySubject<Commission>();

  private commissions: Commission[] = [];
  private filteredCommissions: BehaviorSubject<Commission[]> = new BehaviorSubject<Commission[]>([]);

  private filters: ListFilters = {
    statuses: []
  };

  constructor(
    private http: HttpClient
  ) { }

  public getFilteredCommissionList(): Observable<Commission[]> {
    return this.filteredCommissions.asObservable();
  }

  public fetch(): void {
    this.http.post(ApiUrl.COMMISSION_FETCH, { }, { responseType: 'json' }).subscribe(
      (commissionList: Commission[]) => {
        this.commissions = commissionList;
        this.updateListWithFilters();
      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getSelectedCommission(): Observable<Commission> {
    return this.selectedCommission.asObservable();
  }

  public setSelectedCommission(commission: Commission): void {
    this.selectedCommission.next(commission);
  }

  private updateListWithFilters() {
    let filteredCommissionList = this.commissions;

    if (this.filters.statuses.length > 0) {
      filteredCommissionList = filteredCommissionList.filter((commission: Commission) => {
        return this.filters.statuses.includes(commission.status);
      });
    }

    this.filteredCommissions.next(filteredCommissionList);
  }

  public toggleStatusFilters(statuses: CommissionStatus[]): void {
    for (const status of statuses) {
      if (this.filters.statuses.includes(status)) {
        const index = this.filters.statuses.indexOf(status);
        this.filters.statuses.splice(index, 1);
      } else {
        this.filters.statuses.push(status);
      }
    }
    this.updateListWithFilters();
  }
}
