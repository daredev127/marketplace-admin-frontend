import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { IBuyerDemographics } from 'src/app/dtos/IBuyerDemographics';

@Component({
  templateUrl: 'buyer-demographics.component.html',
})
export class BuyerDemographicsComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}
  buyerDemographics: IBuyerDemographics[] = [];
  totalBuyers: number = 0;
  ngOnInit() {
    this.getBuyerDemographics();
  }

  getBuyerDemographics() {
    this.reportsService.getBuyerDemographics().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.buyerDemographics = res.data.demographics;
        this.totalBuyers = res.data.totalBuyers;
      }
    });
  }
}
