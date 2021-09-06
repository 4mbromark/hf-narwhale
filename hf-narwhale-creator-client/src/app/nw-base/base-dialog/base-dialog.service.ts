import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class BaseDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public close(): void {
    this.dialog.closeAll();
  }
}
