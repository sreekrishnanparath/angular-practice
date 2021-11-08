import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../DTO/Customer';
import { Order } from '../DTO/Order';
import { Product } from '../DTO/Product';
import {ProductServiceService} from '../services/product-service.service'

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {


  @Input() order : Order;
  
  
  constructor(public productService : ProductServiceService) { }

  ngOnInit() {
  }

  getProductList(){
    return this.productService.getProducts();
  }

  onProductSet( selectedProduct : Product){
    this.order.product = selectedProduct;
    this.order.totalPrice = this.order.qty;
  }

}
