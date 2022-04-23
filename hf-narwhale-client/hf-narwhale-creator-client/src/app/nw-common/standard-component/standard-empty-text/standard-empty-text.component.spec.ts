import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardEmptyTextComponent } from './standard-empty-text.component';

describe('StandardEmptyTextComponent', () => {
  let component: StandardEmptyTextComponent;
  let fixture: ComponentFixture<StandardEmptyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardEmptyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardEmptyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
