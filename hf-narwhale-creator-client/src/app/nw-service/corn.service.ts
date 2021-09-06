import { Injectable } from '@angular/core';
import { BaseDialogComponent } from '../nw-base/base-dialog/base-dialog.component';
import { BaseDialogService } from '../nw-base/base-dialog/base-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class CornService {

  windowComponent: BaseDialogComponent;
  windowService: BaseDialogService;

  constructor() { }

  getDialogComponent(): BaseDialogComponent {
    return this.windowComponent;
  }
  getDialogService(): BaseDialogService {
    return this.windowService;
  }

  setDialogComponent(dialogComponent: BaseDialogComponent): void {
    this.windowComponent = dialogComponent;
  }
  setDialogService(windowService: BaseDialogService): void {
    this.windowService = windowService;
  }
  setDialog(windowComponent: BaseDialogComponent, windowService: BaseDialogService): void {
    this.windowComponent = windowComponent;
    this.windowService = windowService;
  }
}
