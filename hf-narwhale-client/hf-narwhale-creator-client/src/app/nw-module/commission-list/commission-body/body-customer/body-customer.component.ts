import { CustomerService } from './customer.service';
import { Customer } from 'src/app/nw-object/nw/customer';
import { BaseCommissionSectionComponent } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.component';
import { Component, OnInit } from '@angular/core';
import { HighFiveUser } from 'src/app/nw-object/hf/user';

@Component({
  selector: 'app-body-customer',
  templateUrl: './body-customer.component.html',
  styleUrls: ['./body-customer.component.css']
})
export class BodyCustomerComponent extends BaseCommissionSectionComponent<Customer> implements OnInit {

  public user: HighFiveUser;
  public isp;

  constructor(
    private customerService: CustomerService
  ) {
    super(customerService);
    this.customerService.getUser().subscribe((user: HighFiveUser) => {
      this.user = user;
    });
    /* this.customerService.getIsp().subscribe((isp: any) => {
      this.isp = isp;
    }); */
  }

  public loadData(): void {
    // this.endEditProcedure();
    this.customerService.getUserByIdCommission(this.idCommission);
    // this.customerService.getIspByIdCommission(this.idCommission);
  }

  public isOk(): boolean {
    return this.user !== null; // && this.isp;
  }

  public isEmpty(): boolean {
    return !this.loading && !this.user;
  }

  protected newDataIstance(): Customer {
    return new Customer();
  }
}
