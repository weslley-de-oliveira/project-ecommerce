import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products!: Products[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((response: any) => {
      this.products = response;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
