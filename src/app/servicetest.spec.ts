import { TestBed } from '@angular/core/testing';

import { Servicetest } from './servicetest';

describe('Servicetest', () => {
  let service: Servicetest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicetest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
