import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmerProductOfferService {
  private apiUrl = 'http://localhost:3000/auth'; 

  constructor(private httpClient: HttpClient) {}

  // Get all offers
  getAllOffers(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  // Create a new offer
  createOffer(offerData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, offerData);
  }

  // Update an offer
  updateOffer(offerId: number, offerData: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${offerId}`, offerData);
  }

  // Delete an offer
  deleteOffer(offerId: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${offerId}`);
  }
}