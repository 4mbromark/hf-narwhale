import { CommissionOrderService } from './commission-order.service';
import { CommissionOrder } from './../../../../nw-object/nw/commission-order';
import { BaseCommissionSectionComponent } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.component';
import { Component, OnInit } from '@angular/core';
import { UserDirection } from 'src/app/nw-object/nw/user-direction';

@Component({
  selector: 'app-body-order',
  templateUrl: './body-order.component.html',
  styleUrls: ['./body-order.component.css']
})
export class BodyOrderComponent extends BaseCommissionSectionComponent<CommissionOrder> implements OnInit {

  public userDirectionValues = UserDirection;

  constructor(
    private commissionOrderService: CommissionOrderService
  ) {
    super(commissionOrderService);
  }

  protected newDataIstance(): CommissionOrder {
    return new CommissionOrder();
  }

  public loadData(): void {
    this.endEditProcedure();
    this.commissionSectionService.getByIdCommission(this.idCommission).then((commissionOrderList: CommissionOrder[]) => {
      if (commissionOrderList.length > 0) {
        this.select(this.dataList[0]);
      }
    });
  }
}
