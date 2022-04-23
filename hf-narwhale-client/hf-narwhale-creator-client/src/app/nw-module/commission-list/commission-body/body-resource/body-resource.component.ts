import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommissionResourceService } from './commission-resource.service';
import { CommissionResource } from './../../../../nw-object/nw/commission-resource';
import { Component, Input, OnInit } from '@angular/core';
import { BaseCommissionSectionComponent } from 'src/app/nw-common/base-component/base-commission-section/base-commission-section.component';

@Component({
  selector: 'app-body-resource',
  templateUrl: './body-resource.component.html',
  styleUrls: ['./body-resource.component.css']
})
export class BodyResourceComponent extends BaseCommissionSectionComponent<CommissionResource> implements OnInit {

  public html: any;

  constructor(
    private commissionResourceService: CommissionResourceService,
    private http: HttpClient
  ) {
    super(commissionResourceService);
  }

  protected newDataIstance(): CommissionResource {
    return new CommissionResource();
  }

  public openUrl(link: string): void {
    let url = '';

    if (!/^http[s]?:\/\//.test(link)) {
      url += 'http://';
    }

    url += link;
    window.open(url, '_blank');
  }
}
