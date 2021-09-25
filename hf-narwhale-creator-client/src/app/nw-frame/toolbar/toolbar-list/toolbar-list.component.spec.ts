import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarListComponent } from './toolbar-list.component';

describe('ToolbarListComponent', () => {
  let component: ToolbarListComponent;
  let fixture: ComponentFixture<ToolbarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
