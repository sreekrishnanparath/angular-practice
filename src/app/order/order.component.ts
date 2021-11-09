import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../DTO/Customer';
import { Order } from '../DTO/Order';
import { Product } from '../DTO/Product';
import {ProductServiceService} from '../services/product-service.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  @Input() order : Order;
  
  
  constructor(public productService : ProductServiceService) { }

  ngOnInit() {
    //this.order = new Order(new Product(0,"",0),0,0,0);
  }

  //Fetch product list
  getProductList(){
    return this.productService.getProducts();
  }

  //Product select event
  onProductSet( selectedProduct : Product){
    this.order.product = selectedProduct;
    this.order.qty = 0;
    this.order.totalPrice = 0;
  }

  //Qty enter event
  OnQtyEntered(enterQty: number): void {  
    console.log(enterQty);
    this.order.totalPrice = enterQty * this.order.product.price;
  }

}
