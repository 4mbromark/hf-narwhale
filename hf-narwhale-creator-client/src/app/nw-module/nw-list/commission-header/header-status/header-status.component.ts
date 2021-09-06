import { Commission } from './../../../../nw-object/nw/commission';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getDetail, Status, StatusDetail } from 'src/app/nw-object/status/status';

@Component({
  selector: 'app-header-status',
  templateUrl: './header-status.component.html',
  styleUrls: ['./header-status.component.css']
})
export class HeaderStatusComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  public statusValues = Status;

  public statusDetail: StatusDetail;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const statusDetail = getDetail(this.commission.status);
    this.statusDetail = statusDetail;
  }

}
