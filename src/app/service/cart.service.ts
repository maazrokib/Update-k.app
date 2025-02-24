import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Add a product to the cart
  addToCart(cartItem: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cart/add`, cartItem); // Corrected endpoint
  }

  getCartItems(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cart/user/${userId}`);
  }

  // Remove an item from the cart
  removeFromCart(cartItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/delete/${cartItemId}`);
  }

  // Clear the entire cart for a user
  clearCart(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cart/clear/${userId}`);
  }
}
