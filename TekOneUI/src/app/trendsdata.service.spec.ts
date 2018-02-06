import { TestBed, inject } from '@angular/core/testing';

import { TrendsdataService } from './trendsdata.service';

describe('TrendsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendsdataService]
    });
  });

  it('should be created', inject([TrendsdataService], (service: TrendsdataService) => {
    expect(service).toBeTruthy();
  }));
});
