import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionListComponent } from './commission-list.component';

describe('CommissionListComponent', () => {
  let component: CommissionListComponent;
  let fixture: ComponentFixture<CommissionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
