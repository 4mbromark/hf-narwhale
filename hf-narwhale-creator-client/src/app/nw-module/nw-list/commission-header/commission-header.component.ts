import { Commission } from './../../../nw-object/nw/commission';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commission-header',
  templateUrl: './commission-header.component.html',
  styleUrls: ['./commission-header.component.css']
})
export class CommissionHeaderComponent implements OnInit {
  @Input() commission: Commission;

  constructor() { }

  ngOnInit(): void {
  }

}
