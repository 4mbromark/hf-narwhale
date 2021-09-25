import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWithStatusComponent } from './insert-with-status.component';

describe('InsertWithStatusComponent', () => {
  let component: InsertWithStatusComponent;
  let fixture: ComponentFixture<InsertWithStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertWithStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertWithStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
