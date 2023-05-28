import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerDemographicsComponent } from './buyer-demographics.component';
import { SalesDetailsComponent } from './sales-details.component';

import { SalesSummaryComponent } from './sales-summary.component';
import { SellerDemographicsComponent } from './seller-demographics.component';
import { SellerSalesComponent } from './seller-sales.component';

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
        redirectTo: 'sales-summary',
      },
      {
        path: 'sales-summary',
        component: SalesSummaryComponent,
        data: {
          title: 'Sales Summary',
        },
      },
      {
        path: 'sales-details',
        component: SalesDetailsComponent,
        data: {
          title: 'Sales Details',
        },
      },
      {
        path: 'seller-sales',
        component: SellerSalesComponent,
        data: {
          title: 'Seller Sales',
        },
      },
      {
        path: 'buyer-demographics',
        component: BuyerDemographicsComponent,
        data: {
          title: 'Buyer Demographics',
        },
      },
      {
        path: 'seller-demographics',
        component: SellerDemographicsComponent,
        data: {
          title: 'Seller Demographics',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
