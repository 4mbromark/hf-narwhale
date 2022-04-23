import { CommissionStatus } from 'src/app/nw-object/commission/commission-status';
import { Commission } from './../../nw-object/nw/commission';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';
import { CommissionListFilter } from './commission-list.config';

@Injectable({
  providedIn: 'root'
})
export class CommissionListService {

  private selectedCommission: ReplaySubject<Commission> = new ReplaySubject<Commission>();

  private filteredCommissions: BehaviorSubject<Commission[]> = new BehaviorSubject<Commission[]>([]);

  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private filters: CommissionListFilter = {
    status: []
  };

  constructor(
    private http: HttpClient
  ) { }

  public getFilteredCommissionList(): Observable<Commission[]> {
    return this.filteredCommissions.asObservable();
  }

  public getFilteredCommissionListValue(): Commission[] {
    return this.filteredCommissions.value;
  }

  public getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public fetch(): Promise<Commission[]> {
    this.loading.next(true);
    return new Promise((resolve, reject) => {
      this.http.post(NarwhaleCSApi.COMMISSION_FETCH, {}, { responseType: 'json' }).subscribe(
        (commissionList: Commission[]) => {
          this.filteredCommissions.next(commissionList);
          this.loading.next(false);
          resolve(commissionList);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public updateRecord(updatedCommission: Commission): void {
    const commissionList = this.filteredCommissions.value;
    const commission = commissionList.find(i => i.id === updatedCommission.id);

    if (commission) {
      const index = commissionList.indexOf(commission);
      commissionList[index] = updatedCommission;
      this.filteredCommissions.next(commissionList);
    } else {
      this.fetch();
    }
  }

  public getSelectedCommission(): Observable<Commission> {
    return this.selectedCommission.asObservable();
  }

  public setSelectedCommission(commission: Commission): void {
    this.selectedCommission.next(commission);
  }

  public toggleStatusFilters(statuses: CommissionStatus[]): void {
    for (const status of statuses) {
      if (this.filters.status.includes(status)) {
        const index = this.filters.status.indexOf(status);
        this.filters.status.splice(index, 1);
      } else {
        this.filters.status.push(status);
      }
    }
    // this.updateListWithFilters();
  }
}
