import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://170.64.156.57:8001/api';

  login(credentials: any): Observable<any> {
    const body = JSON.stringify(credentials);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(this.URL + '/login/admin', body, {
      headers: headers,
    });
  }
}
