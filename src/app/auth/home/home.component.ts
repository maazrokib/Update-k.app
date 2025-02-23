import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Product } from 'src/model/product';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
applyFilters() {
throw new Error('Method not implemented.');
}
  products: Product[] = [];
editProduct: any;
priceRange: any;
selectedCategory: any;
categories: any;
discountOnly: any;

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