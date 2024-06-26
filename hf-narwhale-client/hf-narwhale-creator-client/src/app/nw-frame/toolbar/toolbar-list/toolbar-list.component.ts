import { CommissionListService } from './../../../nw-module/commission-list/commission-list.service';
import { CommissionStatusColor, getCommissionStatusesByColor } from './../../../nw-object/commission/commission-status';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCommissionComponent } from '../new-commission/create-commission.component';
import { CommissionStatusFilterButton, COMMISSION_STATUS_FILTER_LIST } from 'src/app/nw-module/commission-list/commission-list.config';

@Component({
  selector: 'app-toolbar-list',
  templateUrl: './toolbar-list.component.html',
  styleUrls: ['./toolbar-list.component.css']
})
export class ToolbarListComponent implements OnInit {

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

  public openNewCommissionDialog(): void {
    this.dialog.open(CreateCommissionComponent, {
      /*width: '50%',
      height: '80%',*/
      data: {
        icon: 'plus',
        title: 'Nuova commissione'
      }
    });
  }
}
