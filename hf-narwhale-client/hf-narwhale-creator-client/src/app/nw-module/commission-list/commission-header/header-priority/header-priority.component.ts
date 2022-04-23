import { CommissionPriorityDetail, getCommissionPriorityDetail } from './../../../../nw-object/commission/commission-priority';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-header-priority',
  templateUrl: './header-priority.component.html',
  styleUrls: ['./header-priority.component.css']
})
export class HeaderPriorityComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  public priorityDetail: CommissionPriorityDetail;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const priorityDetail = getCommissionPriorityDetail(this.commission.priority);
    this.priorityDetail = priorityDetail;
  }
}
