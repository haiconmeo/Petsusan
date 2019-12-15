import { TestBed } from '@angular/core/testing';

import { ListAiService } from './list-ai.service';

describe('ListAiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListAiService = TestBed.get(ListAiService);
    expect(service).toBeTruthy();
  });
});
