import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyActionComponent } from './body-action.component';

describe('BodyActionComponent', () => {
  let component: BodyActionComponent;
  let fixture: ComponentFixture<BodyActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
