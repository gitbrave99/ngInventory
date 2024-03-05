import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { MainCustomerPageComponent } from './pages/main-customer-page/main-customer-page.component';


@NgModule({
  declarations: [
    MainCustomerPageComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
