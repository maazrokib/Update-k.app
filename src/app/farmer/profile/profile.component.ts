import { Component, OnInit } from '@angular/core';
import { FarmerProfileService } from '../services/farmer-profile-service.service';
import { FarmerProfile } from 'src/app/model/profile.ts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
onImageUpload($event: Event) {
throw new Error('Method not implemented.');
}
  farmer: FarmerProfile = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    location: '',
    joined: '',
    productsItems: '',
    profilePicture: '',
    experience: '',
    farmSize: 0,
    date: ''
  };
  isEditing = false;

  constructor(private farmerProfileService: FarmerProfileService) {}

  ngOnInit(): void {
    this.getFarmerProfile(1);  
  }

  getFarmerProfile(id: number): void {
    this.farmerProfileService.getFarmerById(id).subscribe(
      (data) => this.farmer = data,
      (error) => console.error('Error fetching farmer data:', error)
    );
  }

  saveFarmer(): void {
    if (this.farmer.id === 0) {
      this.farmerProfileService.createFarmer(this.farmer).subscribe(
        (data) => {
          console.log('Farmer profile created:', data);
          this.farmer = data;
          this.isEditing = false;
        },
        (error) => console.error('Error creating farmer profile:', error)
      );
    } else {
      this.farmerProfileService.updateFarmer(this.farmer.id, this.farmer).subscribe(
        (data) => {
          console.log('Farmer profile updated:', data);
          this.farmer = data;
          this.isEditing = false;
        },
        (error) => console.error('Error updating farmer profile:', error)
      );
    }
  }

  editFarmer(): void {
    this.isEditing = true;
  }
}
