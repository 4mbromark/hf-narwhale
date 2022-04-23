import { CornService } from '../../../nw-service/corn.service';
import { BaseDialogService } from './base-dialog.service';
import { Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.css']
})
export class BaseDialogComponent extends BaseComponent {

  public icon: string;
  public title: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected service: BaseDialogService
  ) {
    super();
    this.title = data.title;
    this.icon = data.icon;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
    return false;
  }

  public close(): void {
    this.service.close();
  }
}
