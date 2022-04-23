import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommissionPriorityChipComponent } from './standard-commission-priority-chip.component';

describe('StandardCommissionPriorityChipComponent', () => {
  let component: StandardCommissionPriorityChipComponent;
  let fixture: ComponentFixture<StandardCommissionPriorityChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardCommissionPriorityChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommissionPriorityChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
