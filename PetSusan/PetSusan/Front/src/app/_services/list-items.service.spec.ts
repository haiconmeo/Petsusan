import { TestBed } from '@angular/core/testing';

import { ListItemsService } from './list-items.service';

describe('ListItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListItemsService = TestBed.get(ListItemsService);
    expect(service).toBeTruthy();
  });
});
