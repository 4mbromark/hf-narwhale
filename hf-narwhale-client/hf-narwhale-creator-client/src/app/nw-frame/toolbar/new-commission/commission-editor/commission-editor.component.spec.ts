import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionEditorComponent } from './commission-editor.component';

describe('CommissionEditorComponent', () => {
  let component: CommissionEditorComponent;
  let fixture: ComponentFixture<CommissionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
