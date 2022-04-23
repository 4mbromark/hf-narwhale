import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSpinnerComponent } from './standard-spinner.component';

describe('StandardSpinnerComponent', () => {
  let component: StandardSpinnerComponent;
  let fixture: ComponentFixture<StandardSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
