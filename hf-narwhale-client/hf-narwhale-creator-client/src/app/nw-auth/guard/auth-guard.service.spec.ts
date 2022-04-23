import { TestBed } from '@angular/core/testing';

import { AuthenticationGuardService } from './auth-guard.service';

describe('AuthenticationGuardService', () => {
  let service: AuthenticationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
