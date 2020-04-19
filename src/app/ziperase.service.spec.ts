import { TestBed } from '@angular/core/testing';

import { ZiperaseService } from './ziperase.service';

describe('ZiperaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZiperaseService = TestBed.get(ZiperaseService);
    expect(service).toBeTruthy();
  });
});
