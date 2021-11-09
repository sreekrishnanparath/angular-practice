import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallsComponent } from './calls-page/calls.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'customer',component: CustomerPageComponent},
  {path:'calls',component: CallsComponent},
  {path:'products',component: ProductPageComponent},
  {path:'orders',component: OrderPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
