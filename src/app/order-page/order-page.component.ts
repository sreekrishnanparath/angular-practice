import { Component, OnInit } from '@angular/core';
import { Customer } from '../DTO/Customer';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {


  selectedCustomer : Customer;

  setSelectedCustomer(event){      
    this.selectedCustomer = event;
}

  constructor() { }

  ngOnInit() {
  }

}
