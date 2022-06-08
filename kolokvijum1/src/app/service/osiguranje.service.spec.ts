import { TestBed } from '@angular/core/testing';

import { OsiguranjeService } from './osiguranje.service';

describe('OsiguranjeService', () => {
  let service: OsiguranjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsiguranjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
