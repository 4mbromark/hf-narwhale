import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStatusComponent } from './header-status.component';

describe('HeaderStatusComponent', () => {
  let component: HeaderStatusComponent;
  let fixture: ComponentFixture<HeaderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
