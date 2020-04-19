import { TestBed } from '@angular/core/testing';

import { GlobalToastService } from './global-toast.service';

describe('GlobalToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalToastService = TestBed.get(GlobalToastService);
    expect(service).toBeTruthy();
  });
});
