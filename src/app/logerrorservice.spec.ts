import { TestBed } from '@angular/core/testing';

import { Logerrorservice } from './logerrorservice';

describe('Logerrorservice', () => {
  let service: Logerrorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logerrorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
