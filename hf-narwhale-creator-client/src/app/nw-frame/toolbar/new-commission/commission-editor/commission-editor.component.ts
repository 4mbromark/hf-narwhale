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

  public titleControl: FormControl = new FormControl(null);
  public descriptionControl: FormControl = new FormControl(null);

  constructor(
    private createCommissionService: CreateCommissionService
  ) { }

  ngOnInit(): void {
  }

  public setCommission(): void {
    const commission = new Commission();
    commission.title = this.titleControl.value;
    commission.description = this.descriptionControl.value;

    this.createCommissionService.setCommission(commission);
  }
}
