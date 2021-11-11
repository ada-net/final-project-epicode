import { TestBed } from '@angular/core/testing';

import { PaidStatusServiceService } from './paid-status-service.service';

describe('PaidStatusServiceService', () => {
  let service: PaidStatusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaidStatusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
