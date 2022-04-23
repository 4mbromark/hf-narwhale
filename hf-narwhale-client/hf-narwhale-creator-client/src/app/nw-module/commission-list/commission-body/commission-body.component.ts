import { CommissionBodySection, COMMISSION_BODY_SECTION_LIST, CommissionBodySectionValue } from './commission-body.config';
import { Component, Input, OnInit } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-commission-body',
  templateUrl: './commission-body.component.html',
  styleUrls: ['./commission-body.component.css']
})
export class CommissionBodyComponent implements OnInit {
  @Input() commission: Commission;

  public sectionValues = CommissionBodySectionValue;
  public sectionList: CommissionBodySection[] = COMMISSION_BODY_SECTION_LIST;

  constructor() {}

  ngOnInit(): void {
    this.sectionList = COMMISSION_BODY_SECTION_LIST.filter((section: CommissionBodySection) => {
      return section.showOnTypes.includes(this.commission.type);
    });
  }
}
