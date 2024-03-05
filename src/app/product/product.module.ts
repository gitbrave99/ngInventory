import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MainCustomerPageComponent } from './pages/main-customer-page/main-customer-page.component';


@NgModule({
  declarations: [
    MainCustomerPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
