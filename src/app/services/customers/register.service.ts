import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesService } from '../api/routes.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private routesService: RoutesService,
    private http: HttpClient
  ) { }

  register(data: any) {
    return this.http.post(this.routesService.url+this.routesService.register, data);
  }
}
