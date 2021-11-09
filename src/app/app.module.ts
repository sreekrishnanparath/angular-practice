import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallsComponent } from './calls-page/calls.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { CallListComponent } from './call-list/call-list.component';
import { CallComponent } from './call/call.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CallsComponent,
    ProductComponent,
    ProductDetailsComponent,
    CustomerPageComponent,
    CustomerDetailsComponent,
    OrderPageComponent,
    OrderDetailsComponent,
    CallListComponent,
    CallComponent,
    CustomerComponent,
    OrderComponent,
    ProductPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
