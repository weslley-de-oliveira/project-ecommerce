import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutesService } from '../api/routes.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private apiService: RoutesService
  ) {}

  getProducts() {
    return this.http.get<any>(`${this.apiService.url+this.apiService.products}`);
  }

}
