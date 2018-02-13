import { TestBed, inject } from '@angular/core/testing';

import { HomeServesService } from './home-serves.service';

describe('HomeServesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServesService]
    });
  });

  it('should be created', inject([HomeServesService], (service: HomeServesService) => {
    expect(service).toBeTruthy();
  }));
});
