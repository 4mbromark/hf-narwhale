import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOrderComponent } from './body-order.component';

describe('BodyOrderComponent', () => {
  let component: BodyOrderComponent;
  let fixture: ComponentFixture<BodyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
