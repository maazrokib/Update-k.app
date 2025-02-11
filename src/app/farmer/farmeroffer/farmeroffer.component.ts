import { Component, OnInit } from '@angular/core';
import { FarmerProductOfferService } from '../services/farmer-product-offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmeroffer',
  templateUrl: './farmeroffer.component.html',
  styleUrls: ['./farmeroffer.component.scss'],
})
export class FarmerofferComponent implements OnInit {
  
  newOffer: any = {
    farmerId: 1,
    productName: '',
    description: '',
    price: 0,
    stockQuantity: 0,
    imageUrl: '',
    category: '',
    sellerName: '',
    productCondition: '',
    deliveryInfo: '',
    discount: 0,
    validUntil: '',
    features: '',
  };

  constructor(
    private offerService: FarmerProductOfferService,  // ✅ কমা যোগ করা হয়েছে
    private router: Router  // ✅ সঠিকভাবে আলাদা করা হয়েছে
  ) {}

  ngOnInit(): void {}

  // Create a new offer
  createOffer(): void {
    this.offerService.createOffer(this.newOffer).subscribe(
      (response) => {
        console.log('Offer created successfully:', response);
        this.router.navigateByUrl('/farmer/offerlist');
      },
      (error) => {
        console.error('Error creating offer:', error);
      }
    );
  }
}
