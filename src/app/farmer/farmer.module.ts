import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { ArgInfoComponent } from './arg-info/arg-info.component';
import { PdeleveryListComponent } from './pdelevery-list/pdelevery-list.component';
import { FarmingStoryComponent } from './farming-story/farming-story.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PCreateComponent } from './p-create/p-create.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { PListComponent } from './p-list/p-list.component';
import { FarmerNavComponent } from './farmer-nav/farmer-nav.component';
import { PcFarmerComponent } from './pc-farmer/pc-farmer.component';
import { FarmerofferComponent } from './farmeroffer/farmeroffer.component';
import { FarmerofferlistComponent } from './farmerofferlist/farmerofferlist.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { HomeFarmerComponent } from './home-farmer/home-farmer.component';



@NgModule({
  declarations: [
    FarmerDashboardComponent,
    ArgInfoComponent,
    PdeleveryListComponent,
    FarmingStoryComponent,
    ProfileComponent,
    OrderListComponent,
    PCreateComponent,
    PEditComponent,
    PListComponent,
    FarmerNavComponent,
    PcFarmerComponent,
    FarmerofferComponent,
    FarmerofferlistComponent,
    ProfileEditComponent,
    OfferEditComponent,
    HomeFarmerComponent,
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class FarmerModule {}
