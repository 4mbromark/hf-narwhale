// tslint:disable: max-line-length
import { CommissionOrderService } from '../../../nw-module/commission-list/commission-body/body-order/commission-order.service';
import { CommissionService } from './../../../nw-module/commission-list/commission.service';
import { CommissionOrder } from './../../../nw-object/nw/commission-order';
import { CommissionStatus } from 'src/app/nw-object/commission/commission-status';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Commission } from './../../../nw-object/nw/commission';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateCommissionData, CreateCommissionStep } from './create-commission.config';
import { Injectable } from '@angular/core';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';

@Injectable({
  providedIn: 'root'
})
export class CreateCommissionService {

  private step: BehaviorSubject<CreateCommissionStep> = new BehaviorSubject<CreateCommissionStep>(CreateCommissionStep.TYPE);

  private data: CreateCommissionData;

  constructor(
    private commissionService: CommissionService,
    private commissionOrderService: CommissionOrderService,
    private http: HttpClient
  ) { }

  public prepareService(): void {
    this.data = {
      type: null,
      commission: null,
      order: null,
      status: null
    };
    this.setStep(CreateCommissionStep.TYPE);
  }

  public getStep(): Observable<CreateCommissionStep> {
    return this.step.asObservable();
  }

  private setStep(step: CreateCommissionStep): void {
    this.step.next(step);
  }

  public getType(): CommissionType {
    return this.data.type;
  }

  public setType(type: CommissionType): void {
    this.data.type = type;
    this.setStep(CreateCommissionStep.COMMISSION);
  }

  public setCommission(commission: Commission, order: CommissionOrder): void {
    this.data.commission = commission;
    this.data.order = order;
    this.setStep(CreateCommissionStep.STATUS);
  }

  public setStatus(status: CommissionStatus): void {
    this.data.status = status;
    this.insert();
  }

  private insert(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const insertedCommission = await this.commissionService.insert(this.data.type, this.data.commission.title, this.data.commission.description);
      const idCommission = insertedCommission.id;

      if (this.data.order) {
        this.data.order.idCommission = idCommission;
        await this.commissionOrderService.insert(this.data.order);
      }

      if (this.data.commission.priority) {
        await this.commissionService.updatePriority(idCommission, this.data.commission.priority);
      }

      if (this.data.status) {
        await this.commissionService.updateStatus(idCommission, this.data.status);
      }

      resolve();
    });
  }
}
