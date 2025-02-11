import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from '../services/farmer.service';

@Component({
  selector: 'app-p-edit',
  templateUrl: './p-edit.component.html',
  styleUrls: ['./p-edit.component.scss']
})
export class PEditComponent implements OnInit {
  productId: number = 0; // পণ্যের আইডি
  productForm: FormGroup; // ফর্ম গ্রুপ

  constructor(
    private farmerService: FarmerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // ফর্ম গ্রুপ ইনিশিয়ালাইজেশন
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      quantity: new FormControl('', Validators.required),
      productCondition: new FormControl('New', Validators.required),
      description: new FormControl(''),
      imageUrl: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // URL থেকে পণ্যের আইডি নিয়ে আসা
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.loadProduct(); // পণ্যের ডেটা লোড করুন
    }
  }

  // পণ্যের ডেটা লোড করুন
  loadProduct() {
    this.farmerService.getById(this.productId).subscribe(
      (res: any) => {
        if (res) {
          // ফর্মে ডেটা সেট করুন
          this.productForm.patchValue({
            name: res.name,
            categoryId: res.categoryId,
            price: res.price,
            quantity: res.quantity,
            productCondition: res.productCondition || 'New',
            description: res.description,
            imageUrl: res.imageUrl
          });
        }
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  // পণ্য আপডেট করুন
  updateProduct() {
    if (this.productForm.valid) {
      const updatedProduct = this.productForm.value;
      this.farmerService.update(this.productId, updatedProduct).subscribe(
        (res) => {
          console.log('Product updated successfully:', res);
          this.router.navigateByUrl('/farmer/p-list'); // পণ্য লিস্ট পেজে রিডাইরেক্ট করুন
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }

  // ফর্ম রিসেট করুন
  clearForm() {
    this.productForm.reset();
  }
}