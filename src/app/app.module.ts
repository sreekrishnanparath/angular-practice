import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallsComponent } from './calls-page/calls.component';
import { ProductComponent } from './product/product.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FormsModule } from '@angular/forms';
import { CallListComponent } from './call-list/call-list.component';
import { CallComponentComponent } from './call-component/call-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CallsComponent,
    ProductComponent,
    ProductComponentComponent,
    ProductDetailsComponent,
    CustomerPageComponent,
    CustomerComponentComponent,
    CustomerDetailsComponent,
    OrderPageComponent,
    OrderComponentComponent,
    OrderDetailsComponent,
    CallListComponent,
    CallComponentComponent,
    
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
