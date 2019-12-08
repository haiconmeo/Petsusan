import { TestBed } from '@angular/core/testing';

import { ListCategoryService } from './list-category.service';

describe('ListCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCategoryService = TestBed.get(ListCategoryService);
    expect(service).toBeTruthy();
  });
});
