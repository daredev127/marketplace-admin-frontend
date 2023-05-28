import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  TableModule,
  ButtonModule,
  ModalModule,
  FormModule,
  WidgetModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { SalesSummaryComponent } from './sales-summary.component';

// Theme Routing
import { ReportsRoutingModule } from './reports-routing.module';
import { SalesDetailsComponent } from './sales-details.component';
import { SellerSalesComponent } from './seller-sales.component';
import { BuyerDemographicsComponent } from './buyer-demographics.component';
import { SellerDemographicsComponent } from './seller-demographics.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    TableModule,
    ButtonModule,
    ModalModule,
    FormModule,
    FormsModule,
    WidgetModule,
  ],
  declarations: [
    SalesSummaryComponent,
    SalesDetailsComponent,
    SellerSalesComponent,
    BuyerDemographicsComponent,
    SellerDemographicsComponent,
  ],
})
export class ReportsModule {}
