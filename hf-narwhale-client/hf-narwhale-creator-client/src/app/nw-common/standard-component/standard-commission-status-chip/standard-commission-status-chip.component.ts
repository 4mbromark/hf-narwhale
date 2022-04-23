// tslint:disable: max-line-length
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommissionStatus, CommissionStatusDetail, getCommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
import { BaseChipComponent } from '../../base-component/base-chip/base-chip.component';

@Component({
  selector: 'app-standard-commission-status-chip',
  templateUrl: './standard-commission-status-chip.component.html',
  styleUrls: ['./standard-commission-status-chip.component.css']
})
export class StandardCommissionStatusChipComponent extends BaseChipComponent<CommissionStatus, CommissionStatusDetail> implements OnInit, OnChanges {

  constructor() {
    super();
  }

  protected getDetail(value: CommissionStatus): CommissionStatusDetail {
    return  getCommissionStatusDetail(value);
  }
}
