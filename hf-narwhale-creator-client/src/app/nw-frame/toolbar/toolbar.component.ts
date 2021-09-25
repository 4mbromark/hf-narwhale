import { ToolbarType } from './toolbar.config';
import { ListService } from './../../nw-module/nw-list/list.service';
import { CreateCommissionComponent } from './new-commission/create-commission.component';
import { CommissionStatusColor } from '../../nw-object/commission/commission-status';
import { BaseComponent } from './../../nw-base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public toolbarTypeValues = ToolbarType;

  public toolbarType: ToolbarType;

  constructor(
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.listService.getSelectedCommission().subscribe((commission: Commission) => {
      commission ? this.toolbarType = ToolbarType.COMMISSION : this.toolbarType = ToolbarType.COMMISSION_LIST;
    });
  }



}
