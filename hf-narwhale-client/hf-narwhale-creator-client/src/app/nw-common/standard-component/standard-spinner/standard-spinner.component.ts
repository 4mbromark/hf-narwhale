import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/nw-common/base-component/base/base.component';

@Component({
  selector: 'app-standard-spinner',
  templateUrl: './standard-spinner.component.html',
  styleUrls: ['./standard-spinner.component.css']
})
export class StandardSpinnerComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
