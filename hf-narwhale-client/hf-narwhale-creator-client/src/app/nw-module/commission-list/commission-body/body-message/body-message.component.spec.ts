import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMessageComponent } from './body-message.component';

describe('BodyMessageComponent', () => {
  let component: BodyMessageComponent;
  let fixture: ComponentFixture<BodyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
