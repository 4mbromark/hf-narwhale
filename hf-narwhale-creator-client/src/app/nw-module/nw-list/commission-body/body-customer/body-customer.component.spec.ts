import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCustomerComponent } from './body-customer.component';

describe('BodyCustomerComponent', () => {
  let component: BodyCustomerComponent;
  let fixture: ComponentFixture<BodyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
