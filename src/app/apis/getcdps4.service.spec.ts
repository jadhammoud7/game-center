import { TestBed } from '@angular/core/testing';

import { Getcdps4Service } from './getcdps4.service';

describe('Getcdps4Service', () => {
  let service: Getcdps4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getcdps4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
