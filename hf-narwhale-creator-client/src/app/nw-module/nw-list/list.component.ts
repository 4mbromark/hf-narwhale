import { ERROR_BACKGROUND_COLOR } from '../../nw-object/commission/commission-status';
import { ListService } from './list.service';
import { Commission } from './../../nw-object/nw/commission';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { isCommissionStatusError } from 'src/app/nw-object/commission/commission-status';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public commissionList: Commission[];
  public commissionActiveList: Commission[] = [];

  constructor(
    private listService: ListService
  ) {
    this.listService.fetch();
  }

  ngOnInit(): void {
    this.listService.getFilteredCommissionList().subscribe((commissions: Commission[]) => {
      this.commissionList = commissions;
      this.selectCommission();
    });
  }

  public selectCommission(commission?: Commission): void {
    if (commission) {
      this.commissionActiveList = [];
      this.commissionActiveList[0] = commission;
    } else {
      this.commissionActiveList = this.commissionList;
    }
    this.listService.setSelectedCommission(commission);
  }

  public getHeaderColor(commission: Commission, panel: MatExpansionPanel): string {
    if (isCommissionStatusError(commission.status)) {
      return ERROR_BACKGROUND_COLOR;
    } else if (panel.expanded) {
      return 'var(--nw-support-color)';
    }
  }
}
