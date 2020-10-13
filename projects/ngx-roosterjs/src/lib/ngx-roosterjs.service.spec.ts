import { TestBed } from '@angular/core/testing';

import { NgxRoosterjsService } from './ngx-roosterjs.service';

describe('NgxRoosterjsService', () => {
  let service: NgxRoosterjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRoosterjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
