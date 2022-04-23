import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTypeComponent } from './header-type.component';

describe('HeaderTypeComponent', () => {
  let component: HeaderTypeComponent;
  let fixture: ComponentFixture<HeaderTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
