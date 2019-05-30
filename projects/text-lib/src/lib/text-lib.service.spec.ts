import { TestBed } from '@angular/core/testing';

import { TextLibService } from './text-lib.service';

describe('TextLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextLibService = TestBed.get(TextLibService);
    expect(service).toBeTruthy();
  });
});
