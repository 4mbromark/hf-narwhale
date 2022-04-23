import { HighFiveUser } from 'src/app/nw-object/hf/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-commission-customer-card',
  templateUrl: './standard-commission-customer-card.component.html',
  styleUrls: ['./standard-commission-customer-card.component.css']
})
export class StandardCommissionCustomerCardComponent implements OnInit {
  @Input() user: HighFiveUser;

  constructor() { }

  ngOnInit(): void {
  }
}
