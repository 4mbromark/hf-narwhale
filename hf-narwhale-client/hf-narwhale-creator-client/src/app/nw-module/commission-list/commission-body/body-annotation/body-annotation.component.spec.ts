import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAnnotationComponent } from './body-annotation.component';

describe('BodyAnnotationComponent', () => {
  let component: BodyAnnotationComponent;
  let fixture: ComponentFixture<BodyAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAnnotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
