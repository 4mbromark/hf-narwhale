import { RoutingService } from './../../nw-service/routing.service';
import { LanguageLabel } from 'src/app/nw-language/language-label';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorConfig } from './display-error.config';
import { BaseComponent } from '../base-component/base/base.component';

@Component({
  selector: 'app-display-error',
  templateUrl: './display-error.component.html',
  styleUrls: ['./display-error.component.css']
})
export class DisplayErrorComponent extends BaseComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { config: ErrorConfig, error: string },
    private routingService: RoutingService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public reload(): void {
    this.routingService.reload();
  }
}
