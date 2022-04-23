import { CommissionStatusDetail, getCommissionStatusDetail } from 'src/app/nw-object/commission/commission-status';
import { Commission } from './../../../../nw-object/nw/commission';
import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-body-recap',
  templateUrl: './body-recap.component.html',
  styleUrls: ['./body-recap.component.css']
})
export class BodyRecapComponent implements OnInit {
  @Input() commission: Commission;

  public statusDetail: CommissionStatusDetail;

  constructor() { }

  ngOnInit(): void {
  }
}
