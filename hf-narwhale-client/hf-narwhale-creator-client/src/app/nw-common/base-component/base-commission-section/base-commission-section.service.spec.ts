import { TestBed } from '@angular/core/testing';

import { BaseCommissionSectionService } from './base-commission-section.service';

describe('BaseCommissionSectionService', () => {
  let service: BaseCommissionSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCommissionSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
