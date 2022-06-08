import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesService } from '../api/routes.service';
import { StorageService } from '../storage/storage.service';
import jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private routesService: RoutesService,
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(data: any) {
    return this.http.post<any>(this.routesService.url+this.routesService.login, data)
    .subscribe((response: any) => {
       if (response.accessToken) {
        this.storageService.set('token', response.accessToken);
        window.history.back();
       }  
    });
  }

  getAuthorizationToken() {
    const token = this.storageService.get('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if(decoded.exp === undefined) {
      return null as any;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
