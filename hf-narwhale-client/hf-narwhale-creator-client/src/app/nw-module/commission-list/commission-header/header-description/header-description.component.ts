import { Commission } from './../../../../nw-object/nw/commission';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-description',
  templateUrl: './header-description.component.html',
  styleUrls: ['./header-description.component.css']
})
export class HeaderDescriptionComponent implements OnInit {
  @Input() commission: Commission;

  constructor() { }

  ngOnInit(): void {
  }
}
