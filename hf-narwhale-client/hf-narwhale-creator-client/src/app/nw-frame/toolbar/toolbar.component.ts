import { CommissionListService } from './../../nw-module/commission-list/commission-list.service';
import { ToolbarType } from './toolbar.config';
import { Component, OnInit } from '@angular/core';
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
    private commissionListService: CommissionListService
  ) {}

  ngOnInit(): void {
    this.commissionListService.getSelectedCommission().subscribe((commission: Commission) => {
      commission ? this.toolbarType = ToolbarType.COMMISSION : this.toolbarType = ToolbarType.COMMISSION_LIST;
    });
  }
}
