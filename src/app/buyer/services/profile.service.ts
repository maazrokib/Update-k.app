import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private apiUrl = 'http://localhost:8080/api/buyer/profile'; // Update with actual Spring API URL

  constructor(private http: HttpClient) { }

  getProfile(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateProfile(profile: any): Observable<any> {
    return this.http.put(this.apiUrl, profile);
  }
}
