import { TestBed } from '@angular/core/testing';
import { PdDeliveryService } from './pd-delivery.service';



describe('PdDeliveryService', () => {
  let service: PdDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
