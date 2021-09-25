import { CommissionAction } from './../../../../nw-object/nw/commission-action';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class BodyActionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getByIdCommission(idCommission: number): Promise<CommissionAction[]> {
    return new Promise((resolve, reject) => {
      this.http.get(ApiUrl.COMMISSION_ACTION_GET_COMMISSION + idCommission, { responseType: 'json' }).subscribe(
        (commissionActionList: CommissionAction[]) => {
          resolve(commissionActionList);
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
