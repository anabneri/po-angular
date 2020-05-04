import { TestBed } from '@angular/core/testing';

import { PoPageDynamicDetailActionsService } from './po-page-dynamic-detail-actions.service';

describe('PoPageDynamicDetailActionsService', () => {
  let service: PoPageDynamicDetailActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoPageDynamicDetailActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
