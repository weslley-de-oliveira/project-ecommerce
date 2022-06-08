import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentAndAddressComponent } from './payment-and-address.component';

const routes: Routes = [{ path: '', component: PaymentAndAddressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentAndAddressRoutingModule { }
