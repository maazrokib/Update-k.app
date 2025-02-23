import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-search',
  templateUrl: './multi-search.component.html',
  styleUrls: ['./multi-search.component.scss']
})
export class MultiSearchComponent {

  categories: string[] = [
    'Crops',
    'Vegetables',
    'Fruits',
    'Grains & Pulses',
    'Oil Seeds',
    'Medicinal Plants',
    'Fish & Animal Products',
    'Processed Food',
    'Agricultural Inputs',
    'Organic Products',
    'Garden & Flowers',
    'Transport & Logistics',
    'Grains',
    'Vegetables',
    'Fruits',
    'Fish',
    'Dairy',
    'Others'
  ];
priceRange: any;
selectedCategory: any;
discountOnly: any;

  applyFilters() {
    console.log({
      price: this.priceRange,
      category: this.selectedCategory,
      discount: this.discountOnly
    });
  }
}
