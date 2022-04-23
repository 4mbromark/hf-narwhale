import { CommissionService } from './../../../nw-module/commission-list/commission.service';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';
import { CommissionStatus, getCommissionStatusPreviousesByStatusAndType, getCommissionStatusSubsequentesByStatusAndType, CommissionStatusDetail, getCommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-standard-commission-status-update-menu',
  templateUrl: './standard-commission-status-update-menu.component.html',
  styleUrls: ['./standard-commission-status-update-menu.component.css']
})
export class StandardCommissionStatusUpdateMenuComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  public updatableStatusList: CommissionStatusDetail[] = [];

  constructor(
    private commissionService: CommissionService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updatableStatusList = [];

    const updatables = getCommissionStatusSubsequentesByStatusAndType(this.commission.status, this.commission.type);
    updatables.forEach((updatable: CommissionStatus) => {
      const detail = getCommissionStatusDetail(updatable);
      this.updatableStatusList.push(detail);
    });
  }

  public updateStatus(status: CommissionStatus): void {
    this.commissionService.updateStatus(this.commission.id, status);
  }
}
