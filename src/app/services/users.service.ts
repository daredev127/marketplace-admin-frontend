import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://170.64.156.57:8001/api';

  getSellers(): Observable<any> {
    return this.http.get(this.URL + '/seller');
  }

  addSeller(seller: any): Observable<any> {
    const body = JSON.stringify(seller);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.URL + '/seller', body, { headers: headers });
  }

  blockSeller(seller: any): Observable<any> {
    const body = JSON.stringify(seller);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/seller/block', body, {
      headers: headers,
    });
  }

  unblockSeller(seller: any): Observable<any> {
    const body = JSON.stringify(seller);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/seller/unblock', body, {
      headers: headers,
    });
  }

  getBuyers(): Observable<any> {
    return this.http.get(this.URL + '/buyer');
  }

  addBuyer(buyer: any): Observable<any> {
    const body = JSON.stringify(buyer);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.URL + '/buyer', body, { headers: headers });
  }

  blockBuyer(buyer: any): Observable<any> {
    const body = JSON.stringify(buyer);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/buyer/block', body, {
      headers: headers,
    });
  }

  unblockBuyer(buyer: any): Observable<any> {
    const body = JSON.stringify(buyer);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/buyer/unblock', body, {
      headers: headers,
    });
  }

  getAdmins(): Observable<any> {
    return this.http.get(this.URL + '/admin');
  }

  addAdmin(admin: any): Observable<any> {
    const body = JSON.stringify(admin);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.URL + '/admin', body, { headers: headers });
  }

  blockAdmin(admin: any): Observable<any> {
    const body = JSON.stringify(admin);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/admin/block', body, {
      headers: headers,
    });
  }

  unblockAdmin(admin: any): Observable<any> {
    const body = JSON.stringify(admin);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/admin/unblock', body, {
      headers: headers,
    });
  }

  getLogisticsStaffs(): Observable<any> {
    return this.http.get(this.URL + '/logisticsStaff');
  }

  addLogisticsStaff(logisticsStaff: any): Observable<any> {
    const body = JSON.stringify(logisticsStaff);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.URL + '/logisticsStaff', body, {
      headers: headers,
    });
  }

  blockLogisticsStaff(logisticsStaff: any): Observable<any> {
    const body = JSON.stringify(logisticsStaff);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/logisticsStaff/block', body, {
      headers: headers,
    });
  }

  unblockLogisticsStaff(logisticsStaff: any): Observable<any> {
    const body = JSON.stringify(logisticsStaff);
    const headers = { 'content-type': 'application/json' };
    return this.http.put(this.URL + '/logisticsStaff/unblock', body, {
      headers: headers,
    });
  }
}
