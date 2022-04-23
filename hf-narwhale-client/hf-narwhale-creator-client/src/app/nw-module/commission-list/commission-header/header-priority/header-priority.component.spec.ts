import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPriorityComponent } from './header-priority.component';

describe('HeaderPriorityComponent', () => {
  let component: HeaderPriorityComponent;
  let fixture: ComponentFixture<HeaderPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
