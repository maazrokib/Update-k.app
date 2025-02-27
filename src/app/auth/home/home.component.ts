import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HomeService } from 'src/app/service/home.service';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  userId: number = 1; // Replace with actual user ID (e.g., from authentication)
cartCount: any;

  constructor(
    private homeService: HomeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  /**
   * Fetches the list of products from the backend service.
   */
  loadProducts(): void {
    this.homeService.getProducts().subscribe(
      (data) => {
        if (data && Array.isArray(data)) {
          this.products = data;
        } else {
          console.error('Invalid product data:', data);
          this.products = [];
        }
      },
      (error) => {
        console.error('Error loading products:', error);
        alert('Failed to load products. Please try again later.');
      }
    );
  }

  addToCart(product: Product): void {
    if (product.quantity <= 0) {
      alert('এই প্রোডাক্টটি স্টকে নেই।');
      return;
    }

    const cartItem = {
      userId: this.userId,
      productId: product.id,
      quantity: 1,
    };

    console.log('Cart Item:', cartItem); // Debugging: Check the payload

    this.cartService.addToCart(cartItem).subscribe(
      (response: any) => {
        console.log('প্রোডাক্ট কার্টে যোগ হয়েছে:', response);
        product.quantity -= 1;
        alert(`${product.name} আপনার কার্টে যোগ হয়েছে।`);
      },
      (error: any) => {
        console.error('কার্টে প্রোডাক্ট যোগ করতে সমস্যা:', error);
        alert('কার্টে প্রোডাক্ট যোগ করতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
      }
    );
  }
}
