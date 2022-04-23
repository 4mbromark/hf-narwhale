import { ERROR_BACKGROUND_COLOR, getCommissionStatusesByColor } from '../../nw-object/commission/commission-status';
import { CommissionListService } from './commission-list.service';
import { Commission } from './../../nw-object/nw/commission';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { isCommissionStatusError } from 'src/app/nw-object/commission/commission-status';
import { CommissionStatusFilterButton, COMMISSION_STATUS_FILTER_LIST } from './commission-list.config';

@Component({
  selector: 'app-commission-list',
  templateUrl: './commission-list.component.html',
  styleUrls: ['./commission-list.component.css']
})
export class CommissionListComponent implements OnInit {

  public commissionList: Commission[] = [];
  public selected: Commission;

  public loading: boolean = false;

  public split = {
    list: 100,
    body: 0
  };

  constructor(
    private commissionListService: CommissionListService
  ) {
    this.commissionListService.getFilteredCommissionList().subscribe((commissions: Commission[]) => {
      this.commissionList = commissions;
      this.selectCommission();
    });
    this.commissionListService.getLoading().subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }

  ngOnInit(): void {
    this.commissionListService.fetch();
  }

/*public selectCommission(commission?: Commission): void {
    if (commission) {
      this.commissionList = [];
      this.commissionList[0] = commission;
    } else {
      this.commissionList = this.commissionListService.getFilteredCommissionListValue();
    }
    this.commissionListService.setSelectedCommission(commission);
  } */

  public selectCommission(commission?: Commission): void {
    this.selected = commission;
    this.commissionListService.setSelectedCommission(commission);
    commission ? this.openBody() : this.closeBody();
  }

  public openBody(bodySize?: number): void {
    bodySize = bodySize ? bodySize : 70;
    this.split = {
      list: 100 - bodySize,
      body: bodySize
    };
  }

  public closeBody(): void {
    this.split = {
      list: 100,
      body: 0
    };
  }

/*public getHeaderColor(commission: Commission, panel: MatExpansionPanel): string {
    if (isCommissionStatusError(commission.status)) {
      return ERROR_BACKGROUND_COLOR;
    } else if (panel.expanded) {
      return 'var(--nw-support-color)';
    }
  } */

  public getHeaderColor(commission: Commission): string {
    if (commission === this.selected) {
      return 'var(--nw-support-color)';
    }
    if (isCommissionStatusError(commission.status)) {
      return ERROR_BACKGROUND_COLOR;
    }
  }
}
