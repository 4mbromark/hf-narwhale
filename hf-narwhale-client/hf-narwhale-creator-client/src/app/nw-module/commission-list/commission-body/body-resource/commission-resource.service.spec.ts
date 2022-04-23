import { TestBed } from '@angular/core/testing';

import { CommissionResourceService } from './commission-resource.service';

describe('CommissionResourceService', () => {
  let service: CommissionResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommissionResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
