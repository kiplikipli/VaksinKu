import { TestBed } from '@angular/core/testing';

import { SonService } from './son.service';

describe('SonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonService = TestBed.get(SonService);
    expect(service).toBeTruthy();
  });
});
