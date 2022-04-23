import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionTitleComponent } from './commission-title.component';

describe('CommissionTitleComponent', () => {
  let component: CommissionTitleComponent;
  let fixture: ComponentFixture<CommissionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
