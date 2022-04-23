// tslint:disable: max-line-length
import { CommissionPriority, CommissionPriorityDetail } from './../../../nw-object/commission/commission-priority';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { getCommissionPriorityDetail } from 'src/app/nw-object/commission/commission-priority';
import { BaseChipComponent } from '../../base-component/base-chip/base-chip.component';

@Component({
  selector: 'app-standard-commission-priority-chip',
  templateUrl: './standard-commission-priority-chip.component.html',
  styleUrls: ['./standard-commission-priority-chip.component.css']
})
export class StandardCommissionPriorityChipComponent extends BaseChipComponent<CommissionPriority, CommissionPriorityDetail> implements OnInit, OnChanges {

  constructor() {
    super();
  }

  protected getDetail(value: CommissionPriority): CommissionPriorityDetail {
    return getCommissionPriorityDetail(value);
  }
}
