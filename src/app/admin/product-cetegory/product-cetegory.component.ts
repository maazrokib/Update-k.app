import { Component } from '@angular/core';

@Component({
  selector: 'app-product-cetegory',
  templateUrl: './product-cetegory.component.html',
  styleUrls: ['./product-cetegory.component.scss']
})
export class ProductCetegoryComponent {

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
