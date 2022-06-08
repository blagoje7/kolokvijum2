import { TestBed } from '@angular/core/testing';

import { OsiguranikService } from './osiguranik.service';

describe('OsiguranikService', () => {
  let service: OsiguranikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsiguranikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
