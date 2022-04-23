import { NarwhaleCSApi } from '../../../../nw-object/url/url';
// tslint:disable: object-literal-shorthand
import { CommissionAnnotation } from '../../../../nw-object/nw/commission-annotation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCommissionSectionService } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.service';

@Injectable({
  providedIn: 'root'
})
export class CommissionAnnotationService extends BaseCommissionSectionService<CommissionAnnotation> {

  protected getUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ANNOTATION_GET_COMMISSION;
  protected insertUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ANNOTATION_INSERT;
  protected updateUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ANNOTATION_UPDATE;
  protected deleteUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_ANNOTATION_DELETE;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  protected buildDataToInsert(data: CommissionAnnotation): any {
    const dataToInsert = {
      text: data.text
    };
    return dataToInsert;
  }

  protected buildDataToUpdate(data: CommissionAnnotation): any {
    const dataToUpdate = {
      text: data.text
    };
    return dataToUpdate;
  }
}
