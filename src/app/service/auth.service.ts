import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "http://localhost:3000/auth";
  constructor(private httpClient: HttpClient) { }

  addData(user: any): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/register`, user);
  }

  getAll(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/users`);
  }

  saveUser(name: string, email: string, role: string, password: string) {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userPassword', password);
  }

  getUserRole(): string {
    return localStorage.getItem('userRole') || '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userName');
  }

  logout() {
    localStorage.clear();
  }
}
