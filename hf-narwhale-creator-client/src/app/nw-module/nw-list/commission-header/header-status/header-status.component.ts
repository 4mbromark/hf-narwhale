import { Commission } from './../../../../nw-object/nw/commission';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getCommissionStatusDetail, CommissionStatus, CommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';

@Component({
  selector: 'app-header-status',
  templateUrl: './header-status.component.html',
  styleUrls: ['./header-status.component.css']
})
export class HeaderStatusComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  public statusValues = CommissionStatus;

  public statusDetail: CommissionStatusDetail;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const statusDetail = getCommissionStatusDetail(this.commission.status);
    this.statusDetail = statusDetail;
  }

}
