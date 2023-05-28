import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ISalesSummary } from 'src/app/dtos/ISalesSummary';

@Component({
  templateUrl: 'sales-summary.component.html',
})
export class SalesSummaryComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}
  salesSummary: ISalesSummary[] = [];
  totalSales: number = 0;
  ngOnInit() {
    this.getSalesSummary();
  }

  getSalesSummary() {
    this.reportsService.getSalesSummary().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.salesSummary = res.data.details;
        this.totalSales = res.data.totalSales;
      }
    });
  }
}
