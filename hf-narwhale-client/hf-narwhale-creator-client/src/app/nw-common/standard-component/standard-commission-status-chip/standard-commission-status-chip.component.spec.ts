import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionStatusChipComponent } from './standard-commission-status-chip.component';

describe('StandardCommissionStatusChipComponent', () => {
  let component: StandardCommissionStatusChipComponent;
  let fixture: ComponentFixture<StandardCommissionStatusChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionStatusChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionStatusChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
