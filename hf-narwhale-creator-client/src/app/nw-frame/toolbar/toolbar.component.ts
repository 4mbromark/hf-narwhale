import { CreateCommissionComponent } from './new-commission/create-commission.component';
import { StatusColor } from './../../nw-object/status/status';
import { BaseComponent } from './../../nw-base/base/base.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent extends BaseComponent implements OnInit {

  statusColor = StatusColor;

  constructor(
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
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
