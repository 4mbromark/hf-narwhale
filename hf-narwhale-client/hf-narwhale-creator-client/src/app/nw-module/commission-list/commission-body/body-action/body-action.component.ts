// tslint:disable: max-line-length
import { getCommissionPriorityDetail } from 'src/app/nw-object/commission/commission-priority';
import { CommissionPriority, CommissionPriorityDetail } from './../../../../nw-object/commission/commission-priority';
import { UserDirection } from './../../../../nw-object/nw/user-direction';
import { BaseCommissionSectionComponent } from '../../../../nw-common/base-component/base-commission-section/base-commission-section.component';
import { CommissionActionType } from '../../../../nw-object/commission/commission-action-type';
import { CommissionActionService } from './commission-action.service';
import { CommissionAction } from '../../../../nw-object/nw/commission-action';
import { Component, Input, OnInit } from '@angular/core';
import { CommissionStatus, CommissionStatusDetail, ERROR_BACKGROUND_COLOR, getCommissionStatusDetail, isCommissionStatusError, isCommissionStatusSuccess } from 'src/app/nw-object/commission/commission-status';

@Component({
  selector: 'app-body-action',
  templateUrl: './body-action.component.html',
  styleUrls: ['./body-action.component.css']
})
export class BodyActionComponent extends BaseCommissionSectionComponent<CommissionAction> implements OnInit {

  public userDirectionValues = UserDirection;
  public commissionActionTypeValues = CommissionActionType;

  public errorBackgroundColorValue = ERROR_BACKGROUND_COLOR;

  constructor(
    private commissionActionService: CommissionActionService
  ) {
    super(commissionActionService);
  }

  protected newDataIstance(): CommissionAction {
    return new CommissionAction();
  }

  public insert(): void {
    throw new Error('Method not implemented.');
  }

  public update(): void {
    throw new Error('Method not implemented.');
  }

  public getStatus(status: CommissionStatus): CommissionStatusDetail {
    return getCommissionStatusDetail(status);
  }

  public isStatusSuccess(status: CommissionStatus): boolean {
    return isCommissionStatusSuccess(status);
  }
  public isStatusError(status: CommissionStatus): boolean {
    return isCommissionStatusError(status);
  }

  public getPriority(priority: CommissionPriority): CommissionPriorityDetail {
    return getCommissionPriorityDetail(priority);
  }
}
