import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { FeedbackStoryComponent } from './feedback-story/feedback-story.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProfileComponent } from './profile/profile.component';
import { BuyerNavComponent } from './buyer-nav/buyer-nav.component';
import { HomeBuyerComponent } from './home-buyer/home-buyer.component';
import { BuyerComponent } from './buyer.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'buyer-dashboard', component: BuyerDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'feedback-story', component: FeedbackStoryComponent },
  { path: 'BuyerComponent', component: BuyerComponent },
  { path: 'home', component: HomeBuyerComponent },
  { path: 'buyer', component: BuyerComponent },
  { path: 'wish', component: WishlistComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
