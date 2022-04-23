import { BaseCommissionSectionService } from '../../../../nw-common/base-component/base-commission-section/base-commission-section.service';
import { CommissionAction } from '../../../../nw-object/nw/commission-action';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class CommissionActionService extends BaseCommissionSectionService<CommissionAction> {

  protected getUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ACTION_GET_COMMISSION;
  protected insertUrl: NarwhaleCSApi = undefined;
  protected updateUrl: NarwhaleCSApi = undefined;
  protected deleteUrl: NarwhaleCSApi = undefined;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  protected buildDataToInsert(data: CommissionAction): any {
    throw new Error('Method not implemented.');
  }

  protected buildDataToUpdate(data: CommissionAction): any {
    throw new Error('Method not implemented.');
  }
}
