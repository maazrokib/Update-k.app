import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerProfile } from 'src/app/model/profile.ts';

@Injectable({
  providedIn: 'root'
})
export class FarmerProfileService {
  // private apiUrl = 'http://localhost:8080/api/farmerprofiles';  
  
  private apiUrl = 'http://localhost:3000/auth'; 
  constructor(private http: HttpClient) {}

  // Fetch Farmer by ID
  getFarmerById(id: number): Observable<FarmerProfile> {
    return this.http.get<FarmerProfile>(`${this.apiUrl}/${id}`);
  }

  // Create a new Farmer
  createFarmer(farmer: FarmerProfile): Observable<FarmerProfile> {
    return this.http.post<FarmerProfile>(this.apiUrl, farmer);
  }

  // Update an existing Farmer
  updateFarmer(id: number, farmer: FarmerProfile): Observable<FarmerProfile> {
    return this.http.put<FarmerProfile>(`${this.apiUrl}/${id}`, farmer);
  }
}
