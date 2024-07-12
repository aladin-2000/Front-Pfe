import { TestBed } from '@angular/core/testing';

import { AlotService } from './alot.service';

describe('AlotService', () => {
  let service: AlotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
