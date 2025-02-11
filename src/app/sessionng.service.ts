import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  // ✅ সেশন ডাটা সেট করা
  setSessionData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // ✅ সেশন ডাটা পাওয়া
  getSessionData(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  // ✅ সেশন ক্লিয়ার করা
  clearSession() {
    localStorage.clear();
  }
}
