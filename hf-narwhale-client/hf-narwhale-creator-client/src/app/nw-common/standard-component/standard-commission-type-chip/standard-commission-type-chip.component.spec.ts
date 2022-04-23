import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionTypeChipComponent } from './standard-commission-type-chip.component';

describe('StandardCommissionTypeChipComponent', () => {
  let component: StandardCommissionTypeChipComponent;
  let fixture: ComponentFixture<StandardCommissionTypeChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionTypeChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionTypeChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
