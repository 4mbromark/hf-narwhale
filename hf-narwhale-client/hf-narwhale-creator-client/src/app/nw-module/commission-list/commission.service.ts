import { CommissionListService } from './commission-list.service';
import { CommissionPriority } from './../../nw-object/commission/commission-priority';
import { CommissionStatus } from './../../nw-object/commission/commission-status';
// tslint:disable: max-line-length
// tslint:disable: object-literal-shorthand
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';
import { Commission } from 'src/app/nw-object/nw/commission';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  constructor(
    private http: HttpClient,
    private commissionListService: CommissionListService
  ) { }

  public insert(type: CommissionType, title: string, description: string): Promise<Commission> {
    return new Promise((resolve, reject) => {
      this.http.put(NarwhaleCSApi.COMMISSION_INSERT, { type: type, title: title, description: description }, { responseType: 'json' }).subscribe(
        (commission: Commission) => {
          resolve(commission);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public updateStatus(id: number, status: CommissionStatus): Promise<Commission> {
    return new Promise((resolve, reject) => {
      this.http.put(NarwhaleCSApi.COMMISSION_UPDATE_STATUS + id, { status: status }, { responseType: 'json' }).subscribe(
        (commission: Commission) => {
          this.commissionListService.updateRecord(commission);
          resolve(commission);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }

  public updatePriority(id: number, priority: CommissionPriority): Promise<Commission> {
    return new Promise((resolve, reject) => {
      this.http.put(NarwhaleCSApi.COMMISSION_UPDATE_PRIORITY + id, { priority: priority }, { responseType: 'json' }).subscribe(
        (commission: Commission) => {
          this.commissionListService.updateRecord(commission);
          resolve(commission);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
