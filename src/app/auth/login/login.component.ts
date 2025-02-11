import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember_me: new FormControl(false),
  });

  userList: any[] = [];

  login() {
    if (this.loginForm.valid) {
      this.authService.getAll().subscribe((res: any) => {
        this.userList = res;

        const user = this.userList.find(
          (u) =>
            u.username === this.loginForm.value.username &&
            u.password === this.loginForm.value.password
        );

        if (user) {
          this.authService.saveUser(user.username, user.email, user.role, user.password);

          if (user.role === 'admin') {
            this.router.navigateByUrl('/admin/admin-nav');
          } else if (user.role === 'buyer') {
            this.router.navigateByUrl('/buyer/buyer-nav');
          } else if (user.role === 'farmer') {
            this.router.navigateByUrl('/farmer/farmer-nav');
          }

        } else {
          alert('Incorrect Username or Password!');
        }
      });
    } else {
      alert('Please fill all required fields!');
    }
  }
}
