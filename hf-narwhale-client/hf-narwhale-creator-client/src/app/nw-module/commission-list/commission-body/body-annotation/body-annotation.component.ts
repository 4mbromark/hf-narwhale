import { OrderType } from './../../../../nw-object/common';
// tslint:disable: max-line-length
import { CommissionAnnotationService } from './commission-annotation.service';
import { CommissionAnnotation } from './../../../../nw-object/nw/commission-annotation';
import { Component, Input, OnInit } from '@angular/core';
import { BaseCommissionSectionComponent } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.component';

@Component({
  selector: 'app-body-annotation',
  templateUrl: './body-annotation.component.html',
  styleUrls: ['./body-annotation.component.css']
})
export class BodyAnnotationComponent extends BaseCommissionSectionComponent<CommissionAnnotation> implements OnInit {

  constructor(
    private commissionAnnotationService: CommissionAnnotationService
  ) {
    super(commissionAnnotationService);
  }

  protected newDataIstance(): CommissionAnnotation {
    return new CommissionAnnotation();
  }
}
