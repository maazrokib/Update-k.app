import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderListComponent } from './order-list/order-list.component';
import { FeedbackStoryComponent } from './feedback-story/feedback-story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PCreateComponent } from './p-create/p-create.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { BuyerNavComponent } from './buyer-nav/buyer-nav.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { BuyerComponent } from './buyer.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    BuyerDashboardComponent,
    ProfileComponent,
    OrderListComponent,
    FeedbackStoryComponent,
    PCreateComponent,
    PEditComponent,
    BuyerNavComponent,
    ProfileEditComponent,
    HomeBuyerComponent,
    BuyerComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class BuyerModule { }
