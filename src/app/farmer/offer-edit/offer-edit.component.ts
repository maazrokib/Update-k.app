import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FarmerProductOfferService } from '../services/farmer-product-offer.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {
createOffer() {
throw new Error('Method not implemented.');
}
  offerId: number;
  offer: any = {};
newOffer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: FarmerProductOfferService
  ) {
    this.offerId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getOfferDetails();
  }

  // Fetch offer details
  getOfferDetails(): void {
    this.offerService.getAllOffers().subscribe((data) => {
      this.offer = data.find((offer: any) => offer.id === this.offerId);
    });
  }

  // Update the offer
  updateOffer(): void {
    this.offerService.updateOffer(this.offerId, this.offer).subscribe(() => {
      this.router.navigate(['/offers']); // Navigate back to the offer list
    });
  }
}