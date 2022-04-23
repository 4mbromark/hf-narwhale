import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommissionResource } from '../../../../nw-object/nw/commission-resource';
import { Injectable } from '@angular/core';
import { BaseCommissionSectionService } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.service';
import { NarwhaleCSApi } from 'src/app/nw-object/url/url';

@Injectable({
  providedIn: 'root'
})
export class CommissionResourceService extends BaseCommissionSectionService<CommissionResource> {

  protected getUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_RESOURCE_GET_COMMISSION;
  protected insertUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_RESOURCE_INSERT;
  protected updateUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_RESOURCE_UPDATE;
  protected deleteUrl: NarwhaleCSApi = NarwhaleCSApi.COMMISSION_RESOURCE_DELETE;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  protected buildDataToInsert(data: CommissionResource): any {
    const dataToInsert = {
      name: data.name,
      link: data.link,
      isPrivate: data.private,
      isReference: data.reference
    };
    return dataToInsert;
  }

  protected buildDataToUpdate(data: CommissionResource): any {
    const dataToUpdate = {
      name: data.name,
      link: data.link
    };
    return dataToUpdate;
  }

  public getHtml(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(NarwhaleCSApi.COMMISSION_RESOURCE_HTML_GET + id, { responseType: 'text' }).subscribe(
        (html: any) => {
          resolve(html);
        },
        (error: HttpErrorResponse) => {
          if (error.status === 406) {
            resolve(null);
          }
          reject(error);
        }
      );
    });
  }
}
