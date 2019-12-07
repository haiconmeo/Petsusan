import { TestBed } from '@angular/core/testing';

import { ListCartService } from './list-cart.service';

describe('ListCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCartService = TestBed.get(ListCartService);
    expect(service).toBeTruthy();
  });
});
