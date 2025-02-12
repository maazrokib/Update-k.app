import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-search',
  templateUrl: './multi-search.component.html',
  styleUrls: ['./multi-search.component.scss']
})
export class MultiSearchComponent {
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


    
