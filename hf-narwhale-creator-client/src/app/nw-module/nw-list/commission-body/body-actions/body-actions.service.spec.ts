import { TestBed } from '@angular/core/testing';

import { BodyActionsService } from './body-actions.service';

describe('BodyActionsService', () => {
  let service: BodyActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
