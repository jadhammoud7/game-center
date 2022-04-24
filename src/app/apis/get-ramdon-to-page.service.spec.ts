import { TestBed } from '@angular/core/testing';

import { GetRamdonToPageService } from './get-ramdon-to-page.service';

describe('GetRamdonToPageService', () => {
  let service: GetRamdonToPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRamdonToPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
