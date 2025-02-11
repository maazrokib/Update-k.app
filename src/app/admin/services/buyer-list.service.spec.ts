import { TestBed } from '@angular/core/testing';

import { BuyerListService } from './buyer-list.service';

describe('BuyerListService', () => {
  let service: BuyerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
