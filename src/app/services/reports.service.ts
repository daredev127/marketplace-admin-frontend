import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://170.64.156.57:8001/api';

  getSalesSummary(): Observable<any> {
    return this.http.get(this.URL + '/sales/summary');
  }

  getSalesByLocation(): Observable<any> {
    return this.http.get(this.URL + '/sales/location');
  }

  getSalesByQuantity(): Observable<any> {
    return this.http.get(this.URL + '/sales/quantity');
  }

  getSalesBySeller(): Observable<any> {
    return this.http.get(this.URL + '/sales/seller');
  }

  getSalesHistory(): Observable<any> {
    return this.http.get(this.URL + '/sales/history');
  }

  getBuyerDemographics(): Observable<any> {
    return this.http.get(this.URL + '/demographics/buyer');
  }

  getSellerDemographics(): Observable<any> {
    return this.http.get(this.URL + '/demographics/seller');
  }

  getProductPriceRanges(): Observable<any> {
    return this.http.get(this.URL + '/price/range');
  }
}
