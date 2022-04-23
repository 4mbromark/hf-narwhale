import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardEmptyComponent } from './standard-empty.component';

describe('StandardEmptyComponent', () => {
  let component: StandardEmptyComponent;
  let fixture: ComponentFixture<StandardEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
