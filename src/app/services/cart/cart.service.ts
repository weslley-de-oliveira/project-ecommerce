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
  ) {}

  addToCart(product: Products) {
    if (this.getCart() == null) {
      this.cart.push(product);
      this.setCart();
      alert('Produto adicionado ao carrinho de compras!');
    } else {
      this.cart = this.getCart();
      let cartFilter = this.cart.filter(item => item.id == product.id);
      if (cartFilter.length > 0) {
        alert('Este produto já está contido no carrinho de compras!');
      } else {
        this.cart.push(product);
        this.setCart();
        alert('Produto adicionado ao carrinho de compras!');
      }
    }
  }

  getCart() {
    return this.storageService.get('cart');
  }

  setCart() {
    this.storageService.set('cart', this.cart);
  }

  addQuantity(product: Products) {
    this.totalPriceCart(this.cart);
    return product.quantity++;
  }

  subtractQuantity(product: Products) {
    
    if (product.quantity == 1) {
      return product.quantity = 1;
    } else {
      return product.quantity--;
    }
  }


  removeItemOfCart(product: Products) {
    this.cart = this.getCart();
    let cartFilter = this.cart.filter(item => item.id != product.id);
    this.cart = cartFilter;
    this.setCart();
    window.location.reload();
  }

  totalPriceProduct(cart: Products[]) {
    cart.forEach((product) => {
      product.total = product.price * product.quantity;
      this.cart = cart;
      this.setCart();
    })
  }

  totalPriceCart(cart: Products[]) {
    let total = cart.map(product => product.total)
    .reduce((acumulador: number, total: number) => acumulador + total);
    return total;
  }



}
