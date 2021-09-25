import { CommissionActionType } from './../../../../nw-object/commission/commission-action-type';
import { BodyActionsService } from './body-actions.service';
import { CommissionAction } from './../../../../nw-object/nw/commission-action';
import { Component, Input, OnInit } from '@angular/core';
import { SectionValue } from '../commission-body.config';
// tslint:disable: max-line-length
import { CommissionStatus, CommissionStatusDetail, ERROR_BACKGROUND_COLOR, getCommissionStatusDetail, isCommissionStatusError } from 'src/app/nw-object/commission/commission-status';

@Component({
  selector: 'app-body-actions',
  templateUrl: './body-actions.component.html',
  styleUrls: ['./body-actions.component.css']
})
export class BodyActionsComponent implements OnInit {
  @Input() idCommission: number;

  public commissionActionTypeValues = CommissionActionType;
  public errorBackgroundColorValue = ERROR_BACKGROUND_COLOR;

  public commissionActionList: CommissionAction[] = [];

  constructor(
    private bodyActionService: BodyActionsService
  ) { }

  ngOnInit(): void {
    this.bodyActionService.getByIdCommission(this.idCommission).then((commissionActionList: CommissionAction[]) => {
      this.commissionActionList = commissionActionList;
    });
  }

  public getStatus(status: CommissionStatus): CommissionStatusDetail {
    return getCommissionStatusDetail(status);
  }

  public isStatusError(status: CommissionStatus): boolean {
    return isCommissionStatusError(status);
  }

}
