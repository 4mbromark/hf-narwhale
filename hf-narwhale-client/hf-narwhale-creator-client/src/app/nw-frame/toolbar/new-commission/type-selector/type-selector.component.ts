import { CreateCommissionService } from '../create-commission.service';
import { Component, OnInit } from '@angular/core';
import { CommissionTypeButton, COMMISSION_TYPE_BUTTON_LIST } from '../create-commission.config';
import { CommissionType } from 'src/app/nw-object/commission/commission-type';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {

  public commissionTypeList: CommissionTypeButton[] = COMMISSION_TYPE_BUTTON_LIST;
  public selectedButton: CommissionTypeButton;

  constructor(
    private createCommissionService: CreateCommissionService
  ) { }

  ngOnInit(): void {
    this.selectedButton = COMMISSION_TYPE_BUTTON_LIST[0];
  }

  public selectButton(button: CommissionTypeButton): void {
    this.selectedButton = button;
  }

  public setType(): void {
    this.createCommissionService.setType(this.selectedButton.tag as CommissionType);
  }
}
