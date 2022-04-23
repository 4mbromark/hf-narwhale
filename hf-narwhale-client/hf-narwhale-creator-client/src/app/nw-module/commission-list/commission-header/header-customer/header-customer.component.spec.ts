import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCustomerComponent } from './header-customer.component';

describe('HeaderCustomerComponent', () => {
  let component: HeaderCustomerComponent;
  let fixture: ComponentFixture<HeaderCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
