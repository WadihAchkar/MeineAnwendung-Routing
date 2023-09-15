import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { finnGuard } from './finn.guard';

describe('finnGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => finnGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
