import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit {
  productForm: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private productService: HomeService,
    private route: ActivatedRoute,
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

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!; // Get the product ID
    this.loadProduct(); // Load the product data
  }

  loadProduct(): void {
    this.productService.getProductById(this.productId).subscribe((product) => {
      this.productForm.patchValue(product); // Populate the form with product data
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const updatedProduct = { ...this.productForm.value }; // Updated product data
      this.productService.updateProduct(this.productId, updatedProduct).subscribe(() => {
        this.router.navigateByUrl('/admin/home'); // Navigate back after successful update
      });
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/home');
  }
}
