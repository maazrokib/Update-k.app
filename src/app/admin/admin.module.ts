import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { ProductCetegoryComponent } from './product-cetegory/product-cetegory.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { MrkPriceComponent } from './mrk-price/mrk-price.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { MrkCreateComponent } from './mrk-create/mrk-create.component';
import { MrkEditComponent } from './mrk-edit/mrk-edit.component';
import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeEditComponent } from './home-edit/home-edit.component';
import { SeasonalCreateComponent } from './seasonal-create/seasonal-create.component';
import { SeasonalListComponent } from './seasonal-list/seasonal-list.component';
import { SeasonalEditComponent } from './seasonal-edit/seasonal-edit.component';
import { BundleCreateComponent } from './bundle-create/bundle-create.component';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { BundleEditComponent } from './bundle-edit/bundle-edit.component';
import { NewestCreateComponent } from './newest-create/newest-create.component';
import { NewestListComponent } from './newest-list/newest-list.component';
import { NewestEditComponent } from './newest-edit/newest-edit.component';
import { TrendingCreateComponent } from './trending-create/trending-create.component';
import { TrendingListComponent } from './trending-list/trending-list.component';
import { TrendingEditComponent } from './trending-edit/trending-edit.component';
import { GreatDealCreateComponent } from './great-deal-create/great-deal-create.component';
import { GreatDealListComponent } from './great-deal-list/great-deal-list.component';
import { GreatDealEditComponent } from './great-deal-edit/great-deal-edit.component';
import { UpcomingCreateComponent } from './upcoming-create/upcoming-create.component';
import { UpcomingListComponent } from './upcoming-list/upcoming-list.component';
import { UpcomingEditComponent } from './upcoming-edit/upcoming-edit.component';
import { CottractCreateComponent } from './cottract-create/cottract-create.component';
import { CottractEditComponent } from './cottract-edit/cottract-edit.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    AboutComponent,
    ContractComponent,
    ProductCetegoryComponent,
    BuyerListComponent,
    FarmerListComponent,
    MrkPriceComponent,
    AdminNavComponent,
    MrkCreateComponent,
    MrkEditComponent,
    HomeCreateComponent,
    HomeEditComponent,
    SeasonalCreateComponent,
    SeasonalListComponent,
    SeasonalEditComponent,
    BundleCreateComponent,
    BundleListComponent,
    BundleEditComponent,
    NewestCreateComponent,
    NewestListComponent,
    NewestEditComponent,
    TrendingCreateComponent,
    TrendingListComponent,
    TrendingEditComponent,
    GreatDealCreateComponent,
    GreatDealListComponent,
    GreatDealEditComponent,
    UpcomingCreateComponent,
    UpcomingListComponent,
    UpcomingEditComponent,
    CottractCreateComponent,
    CottractEditComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
