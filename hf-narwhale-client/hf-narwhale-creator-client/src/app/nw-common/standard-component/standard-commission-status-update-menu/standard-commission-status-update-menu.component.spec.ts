import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionStatusUpdateMenuComponent } from './standard-commission-status-update-menu.component';

describe('StandardCommissionStatusUpdateMenuComponent', () => {
  let component: StandardCommissionStatusUpdateMenuComponent;
  let fixture: ComponentFixture<StandardCommissionStatusUpdateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionStatusUpdateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionStatusUpdateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
