import { TestBed, inject } from '@angular/core/testing';

import { ManagePlayerService } from './manage-player.service';

describe('ManagePlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagePlayerService]
    });
  });

  it('should be created', inject([ManagePlayerService], (service: ManagePlayerService) => {
    expect(service).toBeTruthy();
  }));
});
