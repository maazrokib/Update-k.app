import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {
  cartItems: any[] = [];
  userId: number = 1; // Replace with actual user ID

  constructor(private cartService: CartService,
     private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems(this.userId).subscribe(
      (data) => {
        console.log('Cart Data:', data);  // Check the structure of the response
        if (data && Array.isArray(data)) {
          this.cartItems = data;
        } else {
          console.error('Invalid cart data:', data);
          this.cartItems = [];
        }
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );
  }


  removeFromCart(cartItemId: number): void {
    this.cartService.removeFromCart(cartItemId).subscribe(
      () => {
        this.loadCartItems();
      },
      (error) => {
        console.error('Error removing item from cart:', error);
      }
    );
  }

  clearCart(): void {
    this.cartService.clearCart(this.userId).subscribe(
      () => {
        this.cartItems = [];
      },
      (error) => {
        console.error('Error clearing cart:', error);
      }
    );
  }
}
