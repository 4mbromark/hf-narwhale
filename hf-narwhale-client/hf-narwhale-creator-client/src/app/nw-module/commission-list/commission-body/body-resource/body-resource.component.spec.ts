import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyResourceComponent } from './body-resource.component';

describe('BodyResourceComponent', () => {
  let component: BodyResourceComponent;
  let fixture: ComponentFixture<BodyResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
