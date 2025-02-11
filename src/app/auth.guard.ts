import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLogin') === 'true';
    if (!isLoggedIn) {
      this.router.navigate(['/login']); // যদি লগইন না করা থাকে, তাহলে login page-এ পাঠাবে
      return false;
    }
    return true;
  }
}
