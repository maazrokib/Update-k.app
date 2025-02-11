import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../service/home.service';
import { Product } from 'model/product';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit {
  productForm: FormGroup;
  @Input() selectedProduct: Product | null = null;

  constructor(private fb: FormBuilder, private productService: HomeService) {
    this.productForm = this.fb.group({
      id: [null],
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
    if (this.selectedProduct) {
      this.productForm.patchValue(this.selectedProduct);
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.productService.updateProduct(product).subscribe(() => {
        this.closeModal();
      });
    }
  }

  closeModal(): void {
    // Emit event to close modal
  }
}