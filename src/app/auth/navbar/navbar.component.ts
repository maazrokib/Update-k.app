import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { HomeService } from 'src/app/service/home.service';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit {
  products: Product[] = [];
editProduct: any;

  constructor(private productService: HomeService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; // Load products into the component
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.loadProducts(); // Reload products after deletion
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}

