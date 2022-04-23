import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommissionComponent } from './create-commission.component';

describe('CreateCommissionComponent', () => {
  let component: CreateCommissionComponent;
  let fixture: ComponentFixture<CreateCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
