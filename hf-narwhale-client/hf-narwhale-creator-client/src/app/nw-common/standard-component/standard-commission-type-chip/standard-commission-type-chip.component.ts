// tslint:disable: max-line-length
import { CommissionTypeDetail } from './../../../nw-object/commission/commission-type';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
import { CommissionType, getCommissionTypeDetail } from 'src/app/nw-object/commission/commission-type';
import { BaseChipComponent } from '../../base-component/base-chip/base-chip.component';

@Component({
  selector: 'app-standard-commission-type-chip',
  templateUrl: './standard-commission-type-chip.component.html',
  styleUrls: ['./standard-commission-type-chip.component.css']
})
export class StandardCommissionTypeChipComponent extends BaseChipComponent<CommissionType, CommissionTypeDetail> implements OnInit, OnChanges {

  constructor() {
    super();
  }

  protected getDetail(value: CommissionType): CommissionTypeDetail {
    return getCommissionTypeDetail(value);
  }
}
