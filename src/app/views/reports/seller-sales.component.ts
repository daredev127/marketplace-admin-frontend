import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ISalesBySeller } from '../../dtos/ISalesBySeller';

@Component({
  templateUrl: 'seller-sales.component.html',
})
export class SellerSalesComponent implements OnInit {
  constructor(private reportsService: ReportsService) {}
  salesBySeller: ISalesBySeller[] = [];
  totalSales: number = 0;
  ngOnInit() {
    this.getSalesBySeller();
  }

  getSalesBySeller() {
    this.reportsService.getSalesBySeller().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.salesBySeller = res.data.details;
        this.totalSales = res.data.totalSales;
      }
    });
  }
}
