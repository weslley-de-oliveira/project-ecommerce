import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../interfaces/products';
import { CartService } from '../services/cart/cart.service';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: Products[];
  totalCart!: number;

  constructor(
    private storageService: StorageService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cart = this.storageService.get('cart');
    console.log(this.cart);
    if (this.cart.length == 0) {
      this.router.navigateByUrl('/products-list');
    }

    this.totalProductPrice();
    this.totalCartPrice();
  }

  addQtd(product: Products) {
    this.cartService.addQuantity(product);
    this.totalProductPrice();
    this.totalCartPrice();
  }

  subQtd(product: Products) {
    this.cartService.subtractQuantity(product);
    this.totalProductPrice();
    this.totalCartPrice();
  }

  removeItemOfCart(product: Products) {
   let confirm = window.confirm('Tem certeza que quer remover este item do carrinho?');
   if (confirm == true) {
     this.cartService.removeItemOfCart(product);
   }
  }

  totalProductPrice() {
    this.cartService.totalPriceProduct(this.cart);
  }

  totalCartPrice() {
    this.totalCart = this.cartService.totalPriceCart(this.cart);
  }
}
