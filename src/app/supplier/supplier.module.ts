import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { MainCustomerPageComponent } from './pages/main-customer-page/main-customer-page.component';


@NgModule({
  declarations: [
    MainCustomerPageComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
