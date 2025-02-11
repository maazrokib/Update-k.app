import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-create',
  templateUrl: './home-create.component.html',
  styleUrls: ['./home-create.component.scss']
})
export class HomeCreateComponent{
closeModal() {
throw new Error('Method not implemented.');
}
  productForm: FormGroup;

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
        // Redirect to home page after successful submission
        this.router.navigateByUrl('/home');
      });
    }
  }
}
