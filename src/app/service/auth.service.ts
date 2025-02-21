import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from '../../model/login/login.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    const url = `${this.host}login`;

    return this.http.post<LoginResponse>(url, loginRequest);
  }

  saveAccessTokenAndRefreshToken(loginResponse: LoginResponse): void {
    localStorage.setItem('accessToken', loginResponse.accessToken);
    localStorage.setItem('refreshToken', loginResponse.refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
