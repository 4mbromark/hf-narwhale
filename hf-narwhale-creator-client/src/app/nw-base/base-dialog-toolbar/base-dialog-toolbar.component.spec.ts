import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogToolbarComponent } from './base-dialog-toolbar.component';

describe('BaseDialogToolbarComponent', () => {
  let component: BaseDialogToolbarComponent;
  let fixture: ComponentFixture<BaseDialogToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDialogToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
