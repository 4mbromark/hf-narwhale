import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRecapComponent } from './body-recap.component';

describe('BodyRecapComponent', () => {
  let component: BodyRecapComponent;
  let fixture: ComponentFixture<BodyRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
