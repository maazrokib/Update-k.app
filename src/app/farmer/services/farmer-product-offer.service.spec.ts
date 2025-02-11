import { TestBed } from '@angular/core/testing';

import { FarmerProductOfferService } from './farmer-product-offer.service';

describe('FarmerProductOfferService', () => {
  let service: FarmerProductOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerProductOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
