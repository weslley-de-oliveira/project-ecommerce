import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  //Url base
  url = 'http://localhost:3000/'

  //Produtos
  products = 'products'

  constructor() { }
}
