import { getCommissionTypeDetail } from 'src/app/nw-object/commission/commission-type';
import { CommissionTypeDetail } from './../../../../nw-object/commission/commission-type';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-header-type',
  templateUrl: './header-type.component.html',
  styleUrls: ['./header-type.component.css']
})
export class HeaderTypeComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  public typeDetail: CommissionTypeDetail;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const typeDetail = getCommissionTypeDetail(this.commission.type);
    this.typeDetail = typeDetail;
  }
}
