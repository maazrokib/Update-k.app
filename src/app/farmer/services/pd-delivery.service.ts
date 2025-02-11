import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdDeliveryService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Get all delivery requests
  getAllDeliveries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Create a new delivery request
  createDelivery(deliveryData: any): Observable<any> {
    return this.http.post(this.apiUrl, deliveryData);
  }

  // Update a delivery request
  updateDelivery(deliveryId: number, deliveryData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${deliveryId}`, deliveryData);
  }

  // Delete a delivery request
  deleteDelivery(deliveryId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${deliveryId}`);
  }
}