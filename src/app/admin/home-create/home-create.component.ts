
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.scss']
})
export class HomeCreateComponent {
  productForm: FormGroup;

  // Category List
  categories: string[] = [
    'Vegetables', 'Crops', 'Fruits', 'Dairy', 'Meat', 'Fish', 'Grains', 'Pulses',
    'Oil Seeds', 'Medicinal Plants', 'Processed Food', 'Agricultural Inputs',
    'Organic Products', 'Garden & Flowers', 'Transport & Logistics', 'Others'
  ];

  constructor(
    private fb: FormBuilder,
    private productService: HomeService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      quantity: [null, [Validators.required, Validators.min(0)]],
      productCondition: ['New', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      this.productService.addProduct(product).subscribe(() => {
        this.router.navigateByUrl('/admin/home'); // Redirect to home page after successful submission
      });
    }
  }

  closeModal(): void {
    this.router.navigateByUrl('/admin/home'); // Close modal and navigate back
  }
}
