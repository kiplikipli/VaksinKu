import { TestBed } from '@angular/core/testing';

import { scheduleService } from './schedule';

describe('NotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: scheduleService = TestBed.get(scheduleService);
    expect(service).toBeTruthy();
  });
});
