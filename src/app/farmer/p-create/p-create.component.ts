import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-p-create',
  templateUrl: './p-create.component.html',
  styleUrls: ['./p-create.component.scss']
})
export class PCreateComponent {
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, ]),
    quantity: new FormControl('', Validators.required),
    productCondition: new FormControl('New', Validators.required),
    description: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  });

  constructor(private farmerService: FarmerService, private router: Router) {}

  submitProduct() {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      this.farmerService.add(formData).subscribe(
        (res: any) => {
          this.router.navigateByUrl('/farmer/p-list');
        },
        
      );
    }
  }
}