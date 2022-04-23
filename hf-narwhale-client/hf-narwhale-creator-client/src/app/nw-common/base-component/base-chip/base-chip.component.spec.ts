import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseChipComponent } from './base-chip.component';

describe('BaseChipComponent', () => {
  let component: BaseChipComponent;
  let fixture: ComponentFixture<BaseChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
