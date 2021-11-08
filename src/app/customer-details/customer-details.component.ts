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
  //@Output() enableToedit = new EventEmitter<boolean>();

  customers : Customer [] = [];
   
  constructor(private customerService : CustomerService) { 

  }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }

  customerClicked(cust : Customer){      
      this.selectedCustomer.emit(cust);
      //this.enableToedit.emit(true);
      
  }
}
