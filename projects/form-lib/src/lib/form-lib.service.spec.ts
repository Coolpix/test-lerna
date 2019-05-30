import { TestBed } from '@angular/core/testing';

import { FormLibService } from './form-lib.service';

describe('FormLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormLibService = TestBed.get(FormLibService);
    expect(service).toBeTruthy();
  });
});
