import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent  {
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