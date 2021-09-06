import { CreateCommissionService } from '../create-commission.service';
import { CommissionType } from '../create-commission.config';
import { Component, OnInit } from '@angular/core';
import { CommissionTypeButton, COMMISSION_TYPE_LIST } from '../create-commission.config';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {

  public commissionTypeList: CommissionTypeButton[] = COMMISSION_TYPE_LIST;

  constructor(
    private createCommissionService: CreateCommissionService
  ) { }

  ngOnInit(): void {
  }

  public setType(type: CommissionType): void {
    this.createCommissionService.setType(type);
  }
}
