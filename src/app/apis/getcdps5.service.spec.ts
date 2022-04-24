import { TestBed } from '@angular/core/testing';

import { Getcdps5Service } from './getcdps5.service';

describe('Getcdps5Service', () => {
  let service: Getcdps5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getcdps5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
