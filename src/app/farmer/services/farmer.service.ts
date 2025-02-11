import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  private apiUrl = 'http://localhost:3000/auth'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  // পণ্য যোগ করুন
  add(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // সব পণ্য পান
  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // নির্দিষ্ট পণ্য পান (ID দ্বারা)
  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // পণ্য আপডেট করুন
  update(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  // পণ্য ডিলিট করুন
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}