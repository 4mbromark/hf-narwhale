import { TestBed } from '@angular/core/testing';

import { CreateCommissionService } from './create-commission.service';

describe('CreateCommissionService', () => {
  let service: CreateCommissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCommissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
