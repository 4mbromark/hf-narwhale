import { TestBed } from '@angular/core/testing';

import { CommissionActionService } from './commission-action.service';

describe('CommissionActionService', () => {
  let service: CommissionActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommissionActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
