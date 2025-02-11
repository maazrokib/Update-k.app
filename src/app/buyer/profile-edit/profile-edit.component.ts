import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent {
  profile = {
    name: '',
    email: '',
    phone: '',
    location: '',
    joined: '',
    totalPurchases: 0,
    imageUrl: '' // Added for image URL
  };

  saveProfile() {
    // Logic to save profile data
    // If you are using a service to persist data, call it here.
  }

  // Method to handle the image change
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profile.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
