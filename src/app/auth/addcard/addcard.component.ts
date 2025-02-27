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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems(this.userId).subscribe(
      (data) => {
        this.cartItems = data.map(item => ({
          ...item,
          totalPrice: item.productPrice * item.quantity // Calculate total price
        }));
        console.log('Cart Items:', this.cartItems);
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );
  }

  removeFromCart(cartId: number): void {
    this.cartService.deleteCartItem(cartId).subscribe(
      () => {
        this.cartItems = this.cartItems.filter(item => item.id !== cartId); // Update UI
      },
      (error) => {
        console.error('Error removing cart item:', error);
      }
    );
  }
}
