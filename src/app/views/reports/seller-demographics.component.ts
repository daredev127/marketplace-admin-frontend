import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ISellerDemographics } from '../../dtos/ISellerDemographics';

@Component({
  templateUrl: 'seller-demographics.component.html',
})
export class SellerDemographicsComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}
  sellerDemographics: ISellerDemographics[] = [];
  totalSellers: number = 0;
  ngOnInit() {
    this.getSellerDemographics();
  }

  getSellerDemographics() {
    this.reportsService.getSellerDemographics().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.sellerDemographics = res.data.demographics;
        this.totalSellers = res.data.totalBuyers;
      }
    });
  }
}
