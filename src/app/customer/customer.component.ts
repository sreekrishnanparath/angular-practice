import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../DTO/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  customer : Customer = new Customer(0,"","",0,"");    
  enableToedit : Boolean; 

  @Input('customer') 
  set setCustomerObject(customer : Customer){
    this.customer = customer;
    this.enableToedit = true;
  }
  
   
  constructor(private customerService : CustomerService) {   
    
  }

  

  ngOnInit() {
    this.customer = new Customer(0,"","",0,"");    
  }

  //On save click
  onSave(customerForm : NgForm,custId:number){   

    for(let key in customerForm.value){
        if(customerForm.value[key].length !=0){
          (this.customer as any) [key] = customerForm.value[key];
        }
    }
    console.log( this.customer);
    this.customerService.saveCustomer(this.customer);
    this.OnNew();
  }


  //On edit click
  OnEdit(){
    this.enableToedit = false;
  }

  //On new Click
  OnNew(){
    this.customer = new Customer(0,"","",0,"");
    this.enableToedit = false;
  }

}
