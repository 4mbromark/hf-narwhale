import { TestBed } from '@angular/core/testing';

import { BaseDialogService } from './base-dialog.service';

describe('BaseDialogService', () => {
  let service: BaseDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
