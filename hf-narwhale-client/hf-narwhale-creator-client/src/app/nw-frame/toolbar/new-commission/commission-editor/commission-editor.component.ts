import { CommissionOrder } from './../../../../nw-object/nw/commission-order';
import { CommissionType } from './../../../../nw-object/commission/commission-type';
import { FormControl } from '@angular/forms';
import { Commission } from './../../../../nw-object/nw/commission';
import { Component, OnInit } from '@angular/core';
import { CreateCommissionStep } from '../create-commission.config';
import { CreateCommissionService } from '../create-commission.service';

@Component({
  selector: 'app-commission-editor',
  templateUrl: './commission-editor.component.html',
  styleUrls: ['./commission-editor.component.css']
})
export class CommissionEditorComponent implements OnInit {

  public commissionTypeValues = CommissionType;

  public commissionType: CommissionType = null;

  public titleControl: FormControl = new FormControl(null);
  public descriptionControl: FormControl = new FormControl(null);

  public priorityControl: FormControl = new FormControl(null);

  public deadlineControl: FormControl = new FormControl(null);
  public paymentControl: FormControl = new FormControl(null);
  public paymentAdvanceControl: FormControl = new FormControl(null);

  constructor(
    private createCommissionService: CreateCommissionService
  ) { }

  ngOnInit(): void {
    this.commissionType = this.createCommissionService.getType();
  }

  public setCommission(): void {
    const commission = new Commission();
    commission.title = this.titleControl.value;
    commission.description = this.descriptionControl.value;

    commission.priority = this.priorityControl.value;

    let order = null;
    if (this.commissionType !== CommissionType.PERSONAL) {
      order = new CommissionOrder();
      order.deadline = this.deadlineControl.value;
      order.payment = this.paymentControl.value;
      order.paymentAdvance = this.paymentAdvanceControl.value;
    }

    this.createCommissionService.setCommission(commission, order);
  }
}
