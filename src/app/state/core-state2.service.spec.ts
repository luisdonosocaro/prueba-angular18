import { TestBed } from '@angular/core/testing';

import { CoreState2Service } from './core-state2.service';

describe('CoreState2Service', () => {
  let service: CoreState2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreState2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
