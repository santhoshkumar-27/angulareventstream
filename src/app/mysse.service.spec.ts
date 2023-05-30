import { TestBed } from '@angular/core/testing';

import { MysseService } from './mysse.service';

describe('MysseService', () => {
  let service: MysseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
