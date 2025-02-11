import { Component, OnInit } from '@angular/core';
import { Product } from 'model/product';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home-farmer',
  templateUrl: './home-farmer.component.html',
  styleUrls: ['./home-farmer.component.scss']
})
export class HomeFarmerComponent implements OnInit {
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