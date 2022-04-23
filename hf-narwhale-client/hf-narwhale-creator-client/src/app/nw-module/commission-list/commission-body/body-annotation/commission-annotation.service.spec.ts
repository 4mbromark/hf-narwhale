import { TestBed } from '@angular/core/testing';

import { CommissionAnnotationService } from './commission-annotation.service';

describe('CommissionAnnotationService', () => {
  let service: CommissionAnnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommissionAnnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
