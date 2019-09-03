import { TestBed } from '@angular/core/testing';

import { TWODService } from './twod.service';

describe('TWODService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TWODService = TestBed.get(TWODService);
    expect(service).toBeTruthy();
  });
});
