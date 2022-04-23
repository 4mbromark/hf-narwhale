import { HighFiveUser } from './../../../nw-object/hf/user';
import { Component, OnInit } from '@angular/core';
import { BaseChipComponent } from '../../base-component/base-chip/base-chip.component';

@Component({
  selector: 'app-standard-commission-customer-chip',
  templateUrl: './standard-commission-customer-chip.component.html',
  styleUrls: ['./standard-commission-customer-chip.component.css']
})
export class StandardCommissionCustomerChipComponent extends BaseChipComponent<HighFiveUser, any> implements OnInit {

  constructor() {
    super();
  }

  protected getDetail(value: HighFiveUser): any {
    const detail = {
      icon: value.username ? 'user-alt' : 'user-alt-slash',
      info: this.value.username ? this.value.username : this.value.emailAddress
    };

    return detail;
  }
}
