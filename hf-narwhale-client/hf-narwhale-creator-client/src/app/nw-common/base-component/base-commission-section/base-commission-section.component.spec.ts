import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCommissionSectionComponent } from './base-commission-section.component';

describe('BaseCommissionSectionComponent', () => {
  let component: BaseCommissionSectionComponent;
  let fixture: ComponentFixture<BaseCommissionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCommissionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCommissionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
