import { HttpClient } from '@angular/common/http';
import { CommissionOrder } from '../../../../nw-object/nw/commission-order';
import { BaseCommissionSectionService } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.service';
import { Injectable } from '@angular/core';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class CommissionOrderService extends BaseCommissionSectionService<CommissionOrder> {

  protected getUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ORDER_GET_COMMISSION;
  protected insertUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ORDER_INSERT;
  protected updateUrl: NarwhaleCSApi;
  protected deleteUrl: NarwhaleCSApi;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  protected buildDataToInsert(data: CommissionOrder) {
    const dataToInsert = {
      deadline: data.deadline,
      payment: data.payment,
      paymentAdvance: data.paymentAdvance
    };
    return dataToInsert;
  }

  protected buildDataToUpdate(data: CommissionOrder) {
    throw new Error('Method not implemented.');
  }
}
