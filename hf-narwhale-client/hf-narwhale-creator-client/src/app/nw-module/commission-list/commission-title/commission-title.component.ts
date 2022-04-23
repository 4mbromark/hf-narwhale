import { MatDialog } from '@angular/material/dialog';
import { CommissionListService } from './../commission-list.service';
import { Component, OnInit } from '@angular/core';
import { CommissionStatusFilterButton, COMMISSION_STATUS_FILTER_LIST } from '../commission-list.config';
import { getCommissionStatusesByColor } from 'src/app/nw-object/commission/commission-status';
import { CreateCommissionComponent } from 'src/app/nw-frame/toolbar/new-commission/create-commission.component';

@Component({
  selector: 'app-commission-title',
  templateUrl: './commission-title.component.html',
  styleUrls: ['./commission-title.component.css']
})
export class CommissionTitleComponent implements OnInit {

  public statusFiltersButtons: CommissionStatusFilterButton[] = COMMISSION_STATUS_FILTER_LIST;

  constructor(
    private commissionListService: CommissionListService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public setCommissionStatusFilter(button: CommissionStatusFilterButton): void {
    button.selected = !button.selected;
    const statusFilters = getCommissionStatusesByColor(button.color);
    this.commissionListService.toggleStatusFilters(statusFilters);
  }

  public refresh(): void {
    this.commissionListService.fetch();
  }

  public openNewCommissionDialog(): void {
    const ref = this.dialog.open(CreateCommissionComponent, {
      /*width: '50%',
      height: '80%',*/
      data: {
        icon: 'plus',
        title: 'Nuova commissione'
      }
    });

    ref.afterClosed().subscribe
  }
}
