import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class  CartService {
  private apiUrl = 'http://localhost:8080/api/cart'; // Backend API URL

  constructor(private http: HttpClient) {}

  addToCart(cartItem: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, cartItem);
  }

  getCartItems(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  deleteCartItem(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${cartId}`);
  }
}
