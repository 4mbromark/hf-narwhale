import { TestBed } from '@angular/core/testing';

import { CornService } from './corn.service';

describe('CornService', () => {
  let service: CornService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CornService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
