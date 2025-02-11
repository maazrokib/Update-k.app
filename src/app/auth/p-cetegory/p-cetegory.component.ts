import { Component } from '@angular/core';

@Component({
  selector: 'app-p-cetegory',
  templateUrl: './p-cetegory.component.html',
  styleUrls: ['./p-cetegory.component.scss']
})
export class PCetegoryComponent {


  dropdownVisible: boolean = false; // For controlling dropdown visibility
  selectedCategory: string | null = null; // To store selected category

  // Toggle the dropdown visibility
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  // Select category and set the selected category
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownVisible = false; // Hide dropdown after selection
  }
}
