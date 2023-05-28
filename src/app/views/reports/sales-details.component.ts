import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ISalesSummary } from 'src/app/dtos/ISalesSummary';
import { ISalesByLocation } from '../../dtos/ISalesByLocation';
import { ISalesByQuantity } from 'src/app/dtos/ISalesByQuantity';
import { ISalesHistory } from '../../dtos/ISalesHistory';
import { IPriceRange } from 'src/app/dtos/IPriceRange';

@Component({
  templateUrl: 'sales-details.component.html',
})
export class SalesDetailsComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}
  salesByLocation: ISalesByLocation[] = [];
  salesByQuantity: ISalesByQuantity[] = [];
  salesHistory: ISalesHistory[] = [];
  priceRange: IPriceRange[] = [];
  ngOnInit() {
    this.getSalesByLocation();
    this.getSalesByQuantity();
    this.getSalesHistory();
    this.getProductPriceRanges();
  }

  getSalesByLocation() {
    this.reportsService.getSalesByLocation().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.salesByLocation = res.data;
      }
    });
  }

  getSalesByQuantity() {
    this.reportsService.getSalesByQuantity().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.salesByQuantity = res.data;
      }
    });
  }

  getSalesHistory() {
    this.reportsService.getSalesHistory().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.salesHistory = res.data;
      }
    });
  }

  getProductPriceRanges() {
    this.reportsService.getProductPriceRanges().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.priceRange = res.data;
      }
    });
  }

  formatDate(timestamp: Date): string {
    return new Date(timestamp).toLocaleString();
  }
}
