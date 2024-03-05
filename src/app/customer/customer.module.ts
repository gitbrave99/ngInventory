import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MainCustomerPageComponent } from './pages/main-customer-page/main-customer-page.component';


@NgModule({
  declarations: [
    MainCustomerPageComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
