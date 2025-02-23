import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/home.service';



@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss'],
})
export class HomeEditComponent implements OnInit {
goBack() {
throw new Error('Method not implemented.');
}
  productForm: FormGroup;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((product) => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.updateProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['/']); // Update successful -> redirect to home
      });
    }
  }
}
