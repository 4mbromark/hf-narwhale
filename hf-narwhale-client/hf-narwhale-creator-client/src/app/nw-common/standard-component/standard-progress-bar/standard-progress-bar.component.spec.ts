import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProgressBarComponent } from './standard-progress-bar.component';

describe('StandardProgressBarComponent', () => {
  let component: StandardProgressBarComponent;
  let fixture: ComponentFixture<StandardProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
