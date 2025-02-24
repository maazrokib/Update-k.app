import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  addToCart(product: Product) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/admin/home'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Add a new product
  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, product);
  }

  // Get a product by ID
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update a product
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, product);
  }

  // Delete a product
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
