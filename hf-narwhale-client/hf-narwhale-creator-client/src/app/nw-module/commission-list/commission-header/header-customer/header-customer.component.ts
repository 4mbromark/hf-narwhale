// tslint:disable: no-inferrable-types
import { HighFiveUser } from './../../../../nw-object/hf/user';
import { CustomerService } from './../../commission-body/body-customer/customer.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';

@Component({
  selector: 'app-header-customer',
  templateUrl: './header-customer.component.html',
  styleUrls: ['./header-customer.component.css']
})
export class HeaderCustomerComponent implements OnInit, OnChanges {
  @Input() commission: Commission;

  // public user: HighFiveUser;
  // public loading: boolean = true;

  public icon: string;
  public info: string;

  constructor(
    // private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadUser();
  }

/*   private loadUser(): void {
    const idCustomer = this.commission.idCustomer;

    this.loading = true;
    if (idCustomer) {
      this.customerService.getUserByIdCustomer(idCustomer).then((user: HighFiveUser) => {
        this.loading = false;
        this.user = user;
        if (this.user) {
          this.checkData();
        }
      });
    }
  } */

  private loadUser(): void {
      }
}
