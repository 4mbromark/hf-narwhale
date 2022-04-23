import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionCustomerChipComponent } from './standard-commission-customer-chip.component';

describe('StandardCommissionCustomerChipComponent', () => {
  let component: StandardCommissionCustomerChipComponent;
  let fixture: ComponentFixture<StandardCommissionCustomerChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionCustomerChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionCustomerChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
