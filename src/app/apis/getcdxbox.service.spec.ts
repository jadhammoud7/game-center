import { TestBed } from '@angular/core/testing';

import { GetcdxboxService } from './getcdxbox.service';

describe('GetcdxboxService', () => {
  let service: GetcdxboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcdxboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
