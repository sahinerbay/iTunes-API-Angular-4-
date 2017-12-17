import { TestBed, inject } from '@angular/core/testing';

import { HttpItunesService } from './http-itunes.service';

describe('HttpItunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpItunesService]
    });
  });

  it('should be created', inject([HttpItunesService], (service: HttpItunesService) => {
    expect(service).toBeTruthy();
  }));
});
