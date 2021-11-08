import { Component, Input, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { Customer } from '../DTO/Customer';
import { Order } from '../DTO/Order';
import { Product } from '../DTO/Product';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() customer : Customer;
  
  constructor() { }

  ngOnInit() {
  }




  addOrder(){
    if(this.customer.customerNumber==0){
      alert("Please select any customer!");
      return;
    }
    this.customer.orders.splice(0,0,new Order(new Product(0,"",0),0,0,0));
    console.log("addOrder##",this.customer.orders);
  }
}
