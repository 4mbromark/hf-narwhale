import { Section, SECTION_LIST, SectionValue } from './commission-body.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commission-body',
  templateUrl: './commission-body.component.html',
  styleUrls: ['./commission-body.component.css']
})
export class CommissionBodyComponent implements OnInit {

  public sectionValues = SectionValue;
  public sectionList: Section[] = SECTION_LIST;

  constructor() {}

  ngOnInit(): void {
  }

}
