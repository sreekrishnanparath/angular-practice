import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Customer } from '../DTO/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  @Output() selectedCustomer = new EventEmitter<Customer>();

  customers : Customer [] = [];
   
  constructor(private customerService : CustomerService) { 

  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  //Customer clicked
  customerClicked(cust : Customer){      
      this.selectedCustomer.emit(cust);
      
  }
}
