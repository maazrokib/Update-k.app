import { Component, OnInit } from '@angular/core';
import { PdDeliveryService } from '../services/pd-delivery.service';

@Component({
  selector: 'app-pdelevery-list',
  templateUrl: './pdelevery-list.component.html',
  styleUrls: ['./pdelevery-list.component.scss'],
})
export class PdeleveryListComponent implements OnInit {
  // Delivery form model
  deliveryForm = {
    productName: '',
    deliveryAddress: '',
    quantity: 0,
    deliveryDate: '',
    contactNumber: '',
  };

  // List of delivery requests
  deliveries: any[] = [];

  // Track the currently edited delivery
  editedDelivery: any = null;

  constructor(private deliveryService: PdDeliveryService) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  // Load all delivery requests
  loadDeliveries(): void {
    this.deliveryService.getAllDeliveries().subscribe((data) => {
      this.deliveries = data;
    });
  }

  // Handle form submission
  submitDeliveryForm(): void {
    if (this.editedDelivery) {
      // Update existing delivery
      this.deliveryService
        .updateDelivery(this.editedDelivery.id, this.deliveryForm)
        .subscribe(() => {
          this.loadDeliveries(); // Refresh the list
          this.resetForm(); // Clear the form
        });
    } else {
      // Create new delivery
      this.deliveryService.createDelivery(this.deliveryForm).subscribe(() => {
        this.loadDeliveries(); // Refresh the list
        this.resetForm(); // Clear the form
      });
    }
  }

  // Edit a delivery request
  editDelivery(delivery: any): void {
    this.editedDelivery = delivery;
    this.deliveryForm = { ...delivery }; // Populate the form with the selected delivery
  }

  // Delete a delivery request
  deleteDelivery(deliveryId: number): void {
    this.deliveryService.deleteDelivery(deliveryId).subscribe(() => {
      this.loadDeliveries(); // Refresh the list
    });
  }

  // Reset the form
  resetForm(): void {
    this.deliveryForm = {
      productName: '',
      deliveryAddress: '',
      quantity: 0,
      deliveryDate: '',
      contactNumber: '',
    };
    this.editedDelivery = null;
  }
}