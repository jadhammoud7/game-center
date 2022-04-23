import { TestBed } from '@angular/core/testing';

import { GetCdService } from './get-cd.service';

describe('GetCdService', () => {
  let service: GetCdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
