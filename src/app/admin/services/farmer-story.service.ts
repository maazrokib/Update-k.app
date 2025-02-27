import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerStory } from 'src/model/FarmerStory';


@Injectable({
  providedIn: 'root',
})
export class FarmerStoryService {
  private apiUrl = 'http://localhost:8080/api/farmer-stories'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Get all stories
  getStories(): Observable<FarmerStory[]> {
    return this.http.get<FarmerStory[]>(this.apiUrl);
  }

  // Add a new story
  addStory(story: FarmerStory): Observable<FarmerStory> {
    return this.http.post<FarmerStory>(this.apiUrl, story);
  }

  // Update an existing story
  updateStory(id: number, story: FarmerStory): Observable<FarmerStory> {
    return this.http.put<FarmerStory>(`${this.apiUrl}/${id}`, story);
  }

  // Delete a story
  deleteStory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
