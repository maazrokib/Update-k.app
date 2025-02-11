import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile = {
    name: 'John Doe',          // Default value
    email: 'john.doe@example.com', // Default value
    phone: '123-456-7890',    // Default value
    location: 'New York',     // Default value
    joined: '2021-01-01',     // Default value
    totalPurchases: 15,       // Default value
    imageUrl: ''              // Default value for image URL
  };

  isProfileEdited = false;

  saveProfile() {
    this.isProfileEdited = true;
    // Here, you can handle the save logic (e.g., call a service to persist data)
  }

  editProfile() {
    this.isProfileEdited = false;
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
