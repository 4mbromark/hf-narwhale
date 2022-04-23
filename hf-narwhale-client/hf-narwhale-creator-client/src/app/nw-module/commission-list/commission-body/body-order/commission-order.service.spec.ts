import { TestBed } from '@angular/core/testing';

import { CommissionOrderService } from './commission-order.service';

describe('CommissionOrderService', () => {
  let service: CommissionOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommissionOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
