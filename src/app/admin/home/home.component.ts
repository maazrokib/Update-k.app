import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/service/home.service";
import { Product } from "src/model/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  editProduct: Product | null = null;  // Store the product to edit
  isEditing: boolean = false;  // Manage modal visibility

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

  openEditForm(product: Product): void {
    this.editProduct = { ...product };  // Create a copy of the product to edit
    this.isEditing = true;  // Show the edit form
  }

  closeEditForm(): void {
    this.isEditing = false;  // Close the edit form
    this.editProduct = null;  // Clear the current product being edited
  }

  updateProduct(): void {
    if (this.editProduct) {
      const productId = this.editProduct.id; // Get the product ID
      const updatedProduct = { ...this.editProduct }; // Updated product data

      this.productService.updateProduct(productId, updatedProduct).subscribe(
        () => {
          this.loadProducts();  // Reload products after update
          this.closeEditForm();  // Close the edit form
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    }
  }
}
