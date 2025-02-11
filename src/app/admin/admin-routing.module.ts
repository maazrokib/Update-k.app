import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { ContractComponent } from './contract/contract.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { HomeComponent } from './home/home.component';
import { MrkPriceComponent } from './mrk-price/mrk-price.component';
import { ProductCetegoryComponent } from './product-cetegory/product-cetegory.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { HomeCreateComponent } from './home-create/home-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'product-category', component: ProductCetegoryComponent },
  { path: 'buyer-list', component: BuyerListComponent },
  { path: 'farmer-list', component: FarmerListComponent },
  { path: 'market-price', component: MrkPriceComponent },
  { path: 'admin-nav', component: AdminNavComponent },
  { path: 'home-create', component: HomeCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
