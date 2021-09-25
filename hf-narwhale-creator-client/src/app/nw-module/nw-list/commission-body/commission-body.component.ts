import { Section, SECTION_LIST, SectionValue } from './commission-body.config';
import { Component, Input, OnInit } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-commission-body',
  templateUrl: './commission-body.component.html',
  styleUrls: ['./commission-body.component.css']
})
export class CommissionBodyComponent implements OnInit {
  @Input() commission: Commission;

  public sectionValues = SectionValue;
  public sectionList: Section[] = SECTION_LIST;

  constructor() {}

  ngOnInit(): void {
  }

}
