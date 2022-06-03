import { Injectable } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Products[]=[];
  constructor(
    private storageService: StorageService
  ) { }

  addToCart(product: Products) {
    if (this.getCart() == null) {
      this.cart.push(product);
      this.storageService.set('cart', this.cart)
      alert('Produto adicionado ao carrinho de compras!');
    } else {
      this.cart = this.getCart();
      let cartFilter = this.cart.filter(item => item.id == product.id);
      if (cartFilter.length > 0) {
        alert('Este produto já está contido no carrinho de compras!');
      } else {
        this.cart.push(product);
        this.storageService.set('cart', this.cart);
        alert('Produto adicionado ao carrinho de compras!');
      }
    }
  }

  getCart() {
    return this.storageService.get('cart');
  }

  removeItemOfCart(product: Products) {
    this.cart = this.getCart();
    let cartFilter = this.cart.filter(item => item.id != product.id);
    this.cart = cartFilter;
    this.storageService.set('cart', this.cart);
  }

}
