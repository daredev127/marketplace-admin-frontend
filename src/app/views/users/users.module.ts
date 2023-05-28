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
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { SellerComponent } from './seller.component';
import { BuyerComponent } from './buyer.component';
import { AdminComponent } from './admin.component';
import { LogisticsStaffComponent } from './logistics-staff.component';

// Theme Routing
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
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
  ],
  declarations: [
    SellerComponent,
    BuyerComponent,
    AdminComponent,
    LogisticsStaffComponent,
  ],
})
export class UsersModule {}
