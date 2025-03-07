import { Component } from '@angular/core';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.scss']
})
export class BuyerDashboardComponent {
  priceRange: number = 5000;
  selectedCategory: string = '';
  discountOnly: boolean = false;
  categories: string[] = ['Grains', 'Vegetables', 'Fruits', 'Fish', 'Dairy', 'Others'];

  applyFilters() {
    console.log({
      price: this.priceRange,
      category: this.selectedCategory,
      discount: this.discountOnly
    });
  }
}

