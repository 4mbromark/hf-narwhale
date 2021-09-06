import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMonitorComponent } from './header-monitor.component';

describe('HeaderMonitorComponent', () => {
  let component: HeaderMonitorComponent;
  let fixture: ComponentFixture<HeaderMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
