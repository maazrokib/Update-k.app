import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent  implements OnInit {
  // Farmer details
  farmer = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+880123456789'
  };

  message: string = '';
  sentMessages: any[] = [];
  selectedImage: any = null;

  constructor() {}

  ngOnInit(): void {}

  // Function to make a phone call
  makeCall(phoneNumber: string): void {
    window.open(`tel:${phoneNumber}`);
  }

  // Handle Image Upload
  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;  // Save the uploaded image
      };
      reader.readAsDataURL(file);
    }
  }

  // Send message
  sendMessage(): void {
    if (this.message.trim() || this.selectedImage) {
      const newMessage = {
        sender: 'You',
        text: this.message,
        image: this.selectedImage
      };
      this.sentMessages.push(newMessage);

      // Reset message and image after sending
      this.message = '';
      this.selectedImage = null;
    } else {
      alert('Please write a message or select an image before sending!');
    }
  }
}
