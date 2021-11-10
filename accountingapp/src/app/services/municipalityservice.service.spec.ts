import { TestBed } from '@angular/core/testing';

import { MunicipalityserviceService } from './municipalityservice.service';

describe('MunicipalityserviceService', () => {
  let service: MunicipalityserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipalityserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
