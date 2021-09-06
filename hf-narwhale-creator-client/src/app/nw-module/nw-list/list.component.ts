import { ERROR_BACKGROUND_COLOR } from './../../nw-object/status/status';
import { ListService } from './list.service';
import { Commission } from './../../nw-object/nw/commission';
import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { isError } from 'src/app/nw-object/status/status';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public commissionList: Commission[];

  constructor(
    private listService: ListService
  ) {
    this.listService.fetch();
  }

  ngOnInit(): void {
    this.listService.getCommissionList().subscribe((commissions: Commission[]) => {
      this.commissionList = commissions;
    });
  }

  public getHeaderColor(commission: Commission, panel: MatExpansionPanel): string {
    if (isError(commission.status)) {
      return ERROR_BACKGROUND_COLOR;
    } else if (panel.expanded) {
      return 'var(--nw-support-color)';
    }
  }
}
