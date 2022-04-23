import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionArchiveComponent } from './commission-archive.component';

describe('CommissionArchiveComponent', () => {
  let component: CommissionArchiveComponent;
  let fixture: ComponentFixture<CommissionArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommissionArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
