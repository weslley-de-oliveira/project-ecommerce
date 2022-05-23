import { Injectable } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Products[]=[];
  constructor(
  ) { }

  addToCart(product: Products) {
    if (this.getCard() == null) {
      this.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      alert('Produto adicionado ao carrinho de compras!');
    } else {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      let cartFilter = this.cart.filter(item => item.id == product.id);
      if (cartFilter.length > 0) {
        alert('Este produto já está contido no carrinho de compras!');
      } else {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        alert('Produto adicionado ao carrinho de compras!');
      }
    }
  }

  getCard() {
    return JSON.parse(localStorage.getItem('cart')!);
  }

}
