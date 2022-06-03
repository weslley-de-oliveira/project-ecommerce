import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  { 
    path: 'products-list', 
    loadChildren: () => import('./products/products-list/products-list.module').then(m => m.ProductsListModule) 
  },
  { 
    path: 'product-details', 
    loadChildren: () => import('./products/product-details/product-details.module').then(m => m.ProductDetailsModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./customers/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./customers/register/register.module').then(m => m.RegisterModule) 
  },
  { 
    path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
