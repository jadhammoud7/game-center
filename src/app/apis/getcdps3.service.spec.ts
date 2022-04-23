import { TestBed } from '@angular/core/testing';

import { Getcdps3Service } from './getcdps3.service';

describe('Getcdps3Service', () => {
  let service: Getcdps3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getcdps3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
