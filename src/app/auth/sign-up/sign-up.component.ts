import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(public authService: AuthService, private router: Router) {}

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required])
  });

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;

      // ✅ API তে ডাটা পাঠানোর জন্য addData() কল করা হলো
      this.authService.addData(formData).subscribe(
        (response) => {
          console.log('User registered successfully:', response);

          // ✅ ইউজারের তথ্য লোকাল স্টোরেজে সংরক্ষণ
          this.authService.saveUser(formData.username, formData.email, formData.role, formData.password);

          // ✅ লগইন স্টেট সেট করুন
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("username", formData.username);
          localStorage.setItem("role", formData.role);

          // ✅ ইউজারকে লগইন পেজে নিয়ে যান
          this.router.navigateByUrl('/login');
        },
        (error) => {
          console.error('Error registering user:', error);
          alert('Registration failed! Please try again.');
        }
      );
    } else {
      console.error('Form is invalid!');
      alert('Please fill all fields correctly.');
    }
  }
}
