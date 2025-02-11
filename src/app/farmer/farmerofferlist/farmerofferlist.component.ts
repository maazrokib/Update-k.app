import { Component, OnInit } from '@angular/core';
import { FarmerProductOfferService } from '../services/farmer-product-offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerofferlist',
  templateUrl: './farmerofferlist.component.html',
  styleUrls: ['./farmerofferlist.component.scss'],
})
export class FarmerofferlistComponent implements OnInit {
  offers: any[] = [];

  constructor(
    private offerService: FarmerProductOfferService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOffers();
  }

  // Fetch all offers
  getOffers(): void {
    this.offerService.getAllOffers().subscribe((data) => {
      this.offers = data;
    });
  }

  // Delete an offer
  deleteOffer(offerId: number): void {
    this.offerService.deleteOffer(offerId).subscribe(() => {
      this.getOffers(); // Refresh the list after deletion
    });
  }

  // Navigate to the edit page
  editOffer(offerId: number): void {
    this.router.navigate([`/offer/edit/${offerId}`]);
  }
}