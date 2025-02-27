import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryService } from 'src/app/service/cetegory.service';
import { Category } from 'src/model/Category';

@Component({
  selector: 'app-p-cetegory',
  templateUrl: './p-cetegory.component.html',
  styleUrls: ['./p-cetegory.component.scss']
})
export class PCetegoryComponent implements OnInit {
  categories: Category[] = [];
  isDropdownOpen = false;
  isEditModalOpen = false;
  newCategoryName = '';
  currentCategory: Category = { id: 0, name: '' };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  // Load all categories from backend
  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  // Toggle dropdown visibility
  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!event.target || !(event.target as HTMLElement).closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  // Add a new category
  addCategory(): void {
    if (!this.newCategoryName.trim()) {
      alert('Category name cannot be empty!');
      return;
    }
    const newCategory: Category = { name: this.newCategoryName };
    this.categoryService.addCategory(newCategory).subscribe(
      () => {
        this.newCategoryName = ''; // Clear input field
        this.loadCategories(); // Refresh the list
      },
      (error) => {
        console.error('Error adding category:', error);
        alert('Failed to add category. Please try again.');
      }
    );
  }

  // Open edit modal for a category
  openEditModal(category: Category): void {
    this.currentCategory = { ...category }; // Clone the object
    this.isEditModalOpen = true;
  }

  // Save edited category
  saveEdit(): void {
    if (!this.currentCategory.name.trim()) {
      alert('Category name cannot be empty!');
      return;
    }
    this.categoryService.updateCategory(this.currentCategory.id!, this.currentCategory).subscribe(
      () => {
        this.closeEditModal();
        this.loadCategories(); // Refresh the list
      },
      (error) => {
        console.error('Error updating category:', error);
        alert('Failed to update category. Please try again.');
      }
    );
  }

  // Close edit modal
  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  // Delete a category
  deleteCategory(id: number): void {
    if (!id) {
      console.error('Invalid category ID');
      return;
    }
    this.categoryService.deleteCategory(id).subscribe(
      () => {
        this.loadCategories(); // Refresh the list
      },
      (error) => {
        console.error('Error deleting category:', error);
        alert('Failed to delete category. Please try again.');
      }
    );
  }
}
