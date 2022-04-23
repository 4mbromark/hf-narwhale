import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionBodyComponent } from './commission-body.component';

describe('CommissionBodyComponent', () => {
  let component: CommissionBodyComponent;
  let fixture: ComponentFixture<CommissionBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
