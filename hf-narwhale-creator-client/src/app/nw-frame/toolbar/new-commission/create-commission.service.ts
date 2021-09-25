import { CommissionStatus } from 'src/app/nw-object/commission/commission-status';
import { ApiUrl } from 'src/app/nw-object/url/url';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Commission } from './../../../nw-object/nw/commission';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateCommissionData, CommissionType, CreateCommissionStep, CommissionTypeButton } from './create-commission.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCommissionService {

  private step: BehaviorSubject<CreateCommissionStep> = new BehaviorSubject<CreateCommissionStep>(CreateCommissionStep.TYPE);

  private data: CreateCommissionData;

  constructor(
    private http: HttpClient
  ) { }

  public prepareService(): void {
    this.data = {
      type: null,
      commission: null,
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

  public setCommission(commission: Commission): void {
    this.data.commission = commission;
    this.setStep(CreateCommissionStep.STATUS);
  }

  public setStatus(status: CommissionStatus): void {
    this.data.status = status;
    this.insert();
  }

  private insert(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.put(ApiUrl.COMMISSION_INSERT, this.data).subscribe(
        () => {
          resolve();
        },
        (error: HttpErrorResponse) => {
          reject(error);
        }
      );
    });
  }
}
