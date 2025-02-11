import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // RouterModule ইমপোর্ট করা হয়েছে
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { MyproductComponent } from './auth/myproduct/myproduct.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { PCetegoryComponent } from './auth/p-cetegory/p-cetegory.component';
import { GelleryComponent } from './auth/gellery/gellery.component';
import { HomeCreateComponent } from './auth/home-create/home-create.component';
import { HomeEditComponent } from './auth/home-edit/home-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component:HomeComponent  },
  { path: 'login', component:LoginComponent}, 
  { path: 'sign-up', component: SignUpComponent },
  { path: 'product', component: MyproductComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'p-category', component: PCetegoryComponent },
  { path: 'gellery', component: GelleryComponent },
  { path: 'home-create', component: HomeCreateComponent },
  { path: 'Homeedit', component: HomeEditComponent },
  {
    path: 'buyer',
    loadChildren: () =>
      import('./buyer/buyer.module').then((m) => m.BuyerModule), 
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), 
  },
  {
    path: 'farmer',
    loadChildren: () =>
      import('./farmer/farmer.module').then((m) => m.FarmerModule), 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule], 
})
export class AppRoutingModule {}


