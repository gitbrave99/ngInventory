import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricRoutingModule } from './metric-routing.module';
import { MainCustomerPageComponent } from './pages/main-customer-page/main-customer-page.component';


@NgModule({
  declarations: [
    MainCustomerPageComponent
  ],
  imports: [
    CommonModule,
    MetricRoutingModule
  ]
})
export class MetricModule { }
