import { TestBed } from '@angular/core/testing';

import { ClientTypeServiceService } from './client-type-service.service';

describe('ClientTypeServiceService', () => {
  let service: ClientTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
