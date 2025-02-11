import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  // ভাষা পরিবর্তন করার জন্য ভেরিয়েবল
  selectedLanguage: string = 'en';

  // ভাষা পরিবর্তন করার ফাংশন
  onLanguageChange(event: any): void {
    this.selectedLanguage = event.target.value;
    // এখানে আপনি ভাষা পরিবর্তন করার জন্য লজিক যোগ করতে পারেন (যেমন, ট্রান্সলেশন সার্ভিস ব্যবহার)
  }


    isLoggedIn = false;
    userName = '';
    userRole = '';


    constructor(private authService: AuthService, private router: Router) {}


    ngOnInit() {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.userName = localStorage.getItem('userName') || '';
      this.userRole = this.authService.getUserRole();
      console.log(this.isLoggedIn);

    }

    logout() {
      this.authService.logout();
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
}
