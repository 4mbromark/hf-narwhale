import { CommissionStatus } from 'src/app/nw-object/commission/commission-status';
import { Component, OnInit } from '@angular/core';
// tslint:disable: max-line-length
import { CommissionStatusButton, CommissionTypeButton, getStatusButtonListByType, getTypeButtonByType, TYPE_STATUS_LIST } from '../create-commission.config';
import { CreateCommissionService } from '../create-commission.service';

@Component({
  selector: 'app-insert-with-status',
  templateUrl: './insert-with-status.component.html',
  styleUrls: ['./insert-with-status.component.css']
})
export class InsertWithStatusComponent implements OnInit {

  public commissionType: CommissionTypeButton;
  public statusButtonList: CommissionStatusButton[] = [];
  public selectedButton: CommissionStatusButton;

  constructor(
    private createCommissionService: CreateCommissionService
  ) { }

  ngOnInit(): void {
    const type = this.createCommissionService.getType();

    this.commissionType = getTypeButtonByType(type);
    this.statusButtonList = getStatusButtonListByType(type);
    this.selectedButton = TYPE_STATUS_LIST[0];
  }

  public selectButton(button: CommissionStatusButton): void {
    this.selectedButton = button;
  }

  public setStatus(): void {
    this.createCommissionService.setStatus(this.selectedButton.tag as CommissionStatus);
  }

}
