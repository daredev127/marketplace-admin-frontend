import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BuyerComponent } from './buyer.component';
import { LogisticsStaffComponent } from './logistics-staff.component';

import { SellerComponent } from './seller.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Reports',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'seller',
      },
      {
        path: 'seller',
        component: SellerComponent,
        data: {
          title: 'Seller',
        },
      },
      {
        path: 'buyer',
        component: BuyerComponent,
        data: {
          title: 'Buyer',
        },
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'Admin',
        },
      },
      {
        path: 'logistics-staff',
        component: LogisticsStaffComponent,
        data: {
          title: 'Logistics Staff',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
