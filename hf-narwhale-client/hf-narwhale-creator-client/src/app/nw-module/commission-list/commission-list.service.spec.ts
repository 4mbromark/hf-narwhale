import { TestBed } from '@angular/core/testing';

import { CommissionListService } from './commission-list.service';

describe('ListService', () => {
  let service: CommissionListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommissionListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
