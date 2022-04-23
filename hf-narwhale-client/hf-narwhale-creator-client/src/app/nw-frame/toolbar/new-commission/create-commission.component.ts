import { CreateCommissionService } from './create-commission.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseDialogComponent } from 'src/app/nw-common/base-component/base-dialog/base-dialog.component';
import { BaseDialogService } from 'src/app/nw-common/base-component/base-dialog/base-dialog.service';
import { CornService } from 'src/app/nw-service/corn.service';
import { CreateCommissionStep } from './create-commission.config';

@Component({
  selector: 'app-create-commission',
  templateUrl: './create-commission.component.html',
  styleUrls: ['./create-commission.component.css']
})
export class CreateCommissionComponent extends BaseDialogComponent implements OnInit {

  public stepValues = CreateCommissionStep;

  public step: CreateCommissionStep = CreateCommissionStep.TYPE;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private createCommissionService: CreateCommissionService,
    private corn: CornService,
    protected service: BaseDialogService
  ) {
    super(data, service);
    this.corn.setDialogService(service);
  }

  ngOnInit(): void {
    this.createCommissionService.prepareService();
    this.createCommissionService.getStep().subscribe((step: CreateCommissionStep) => {
      this.step = step;
    });
  }
}
