import { TestBed, inject } from '@angular/core/testing';

import { PlayerStatusService } from './player-status.service';

describe('PlayerStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerStatusService]
    });
  });

  it('should be created', inject([PlayerStatusService], (service: PlayerStatusService) => {
    expect(service).toBeTruthy();
  }));
});
