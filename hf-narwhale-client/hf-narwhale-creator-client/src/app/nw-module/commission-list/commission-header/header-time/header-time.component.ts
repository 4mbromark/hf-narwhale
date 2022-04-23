import { Component, Input, OnInit } from '@angular/core';
import { Commission } from 'src/app/nw-object/nw/commission';

@Component({
  selector: 'app-header-time',
  templateUrl: './header-time.component.html',
  styleUrls: ['./header-time.component.css']
})
export class HeaderTimeComponent implements OnInit {
  @Input() commission: Commission;

  constructor() { }

  ngOnInit(): void {
  }
}
