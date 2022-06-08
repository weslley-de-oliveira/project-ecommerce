import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentAndAddressRoutingModule } from './payment-and-address-routing.module';
import { PaymentAndAddressComponent } from './payment-and-address.component';


@NgModule({
  declarations: [
    PaymentAndAddressComponent
  ],
  imports: [
    CommonModule,
    PaymentAndAddressRoutingModule
  ]
})
export class PaymentAndAddressModule { }
