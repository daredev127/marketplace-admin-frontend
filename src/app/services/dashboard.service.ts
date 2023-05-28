import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://170.64.156.57:8001/api';
  getDashboardData(): Observable<any> {
    return this.http.get(this.URL + '/marketplace/summary');
  }
}
