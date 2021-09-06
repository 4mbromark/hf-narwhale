import { Component, Input } from '@angular/core';
import { BaseDialogService } from '../base-dialog/base-dialog.service';
import { CornService } from 'src/app/nw-service/corn.service';

@Component({
  selector: 'app-base-dialog-toolbar',
  templateUrl: './base-dialog-toolbar.component.html',
  styleUrls: ['./base-dialog-toolbar.component.css']
})
export class BaseDialogToolbarComponent {
  @Input() icon: string;
  @Input() title: string;

  private service: BaseDialogService;

  constructor(
    private corn: CornService
  ) {
    this.service = corn.getDialogService();
  }

  public close(): void {
    this.service.close();
  }
}
