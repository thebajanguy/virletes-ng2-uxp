import { TestBed } from '@angular/core/testing';

import { ToastrMessageService } from './toast-message.service';

describe('AppToastrService', () => {
  let service: ToastrMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastrMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
