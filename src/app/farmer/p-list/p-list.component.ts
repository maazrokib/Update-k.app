import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../services/farmer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.scss'],
})
export class PListComponent implements OnInit {
  productList: any[] = [];

  constructor(private farmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.farmerService.getAll().subscribe(
      (res: any) => {
        this.productList = res;
      },
      (error) => {
        console.error('Error fetching product list:', error);
      }
    );
  }

  editProduct(id: number) {
    this.router.navigate(['/farmer/p-edit', id]);
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.farmerService.delete(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }
}