import { TestBed } from '@angular/core/testing';

import { GetsinglecdService } from './getsinglecd.service';

describe('GetsinglecdService', () => {
  let service: GetsinglecdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsinglecdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
