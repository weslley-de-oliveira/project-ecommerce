import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesService } from '../api/routes.service';
import { StorageService } from '../storage/storage.service';

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
    }, (error: HttpErrorResponse) => {
      alert(`${error.error}`);
    })
  }
}
