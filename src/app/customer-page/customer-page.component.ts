import { Component, OnInit } from '@angular/core';
import { Customer } from '../DTO/Customer';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  selectedCustomer : Customer;
  //enableToedit : boolean;

  setSelectedCustomer(event){      
    this.selectedCustomer = event;
    //this.enableToedit = true;
    
}


  constructor() { }

  ngOnInit() {
  }

}
