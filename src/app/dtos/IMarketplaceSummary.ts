export interface IMarketplaceSummary {
  totalSales: number;
  annualSales: number;
  dailySales: number;
  weeklySales: number;
  monthlySales: number;
  topProducts: ITopProducts[];
  topSellers: ITopSellers[];
}

export interface ITopSellers {
  name?: string;
  amount: number;
}

export interface ITopProducts {
  productName?: string;
  amount: number;
}
