import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/api/register/';
  private loginUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  // Registration method
  register(credentials: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.registerUrl, credentials, { headers });
  }

  // Login method
  login(credentials: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    return this.http.post(this.loginUrl, credentials, { headers, responseType: 'text' });
  }
  
  
}
