import { Component } from '@angular/core';
import { cilChartPie, cilArrowRight } from '@coreui/icons';
import { DashboardService } from 'src/app/services/dashboard.service';
import { IMarketplaceSummary } from 'src/app/dtos/IMarketplaceSummary';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) {}
  marketplaceSummary?: IMarketplaceSummary;
  annualSales: any;
  dailySales: any;
  weeklySales: any;
  monthlySales: any;
  topProducts: any[] = [];
  topSellers: any[] = [];

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe((res) => {
      // console.log(res);
      if (res.status.toLowerCase() == 'ok') {
        this.marketplaceSummary = res.data;
      }
    });
  }
}
