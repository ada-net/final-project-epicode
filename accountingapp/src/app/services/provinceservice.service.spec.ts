import { TestBed } from '@angular/core/testing';

import { ProvinceserviceService } from './provinceservice.service';

describe('ProvinceserviceService', () => {
  let service: ProvinceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
