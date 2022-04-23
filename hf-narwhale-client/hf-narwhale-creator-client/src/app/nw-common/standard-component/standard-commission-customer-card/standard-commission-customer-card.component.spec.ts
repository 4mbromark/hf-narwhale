import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionCustomerCardComponent } from './standard-commission-customer-card.component';

describe('StandardCommissionCustomerCardComponent', () => {
  let component: StandardCommissionCustomerCardComponent;
  let fixture: ComponentFixture<StandardCommissionCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionCustomerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
