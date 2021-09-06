import { BehaviorSubject, Observable } from 'rxjs';
import { CreateCommissionData, CommissionType, CreateCommissionStep } from './create-commission.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCommissionService {

  private step: BehaviorSubject<CreateCommissionStep> = new BehaviorSubject<CreateCommissionStep>(CreateCommissionStep.TYPE);

  private data: CreateCommissionData;

  constructor() { }

  public prepareService(): void {
    this.data = {
      type: null,
      commission: null
    };
    this.setStep(CreateCommissionStep.TYPE);
  }

  public getStep(): Observable<CreateCommissionStep> {
    return this.step.asObservable();
  }

  public setStep(step: CreateCommissionStep): void {
    this.step.next(step);
  }

  public setType(type: CommissionType): void {
    this.data.type = type;
    this.setStep(CreateCommissionStep.COMMISSION);
  }
}
