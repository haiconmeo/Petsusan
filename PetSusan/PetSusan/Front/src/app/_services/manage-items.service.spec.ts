import { TestBed } from '@angular/core/testing';

import { ManageItemsService } from './manage-items.service';

describe('ManageItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageItemsService = TestBed.get(ManageItemsService);
    expect(service).toBeTruthy();
  });
});
