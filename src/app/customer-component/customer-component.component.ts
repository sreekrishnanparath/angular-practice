import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../DTO/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {


  @Input('customer') customer : Customer;
  //@Input('enableToedit') enableToedit;

  
  enableToedit : Boolean;
   
  constructor(private customerService : CustomerService) {   
    
  }

  

  ngOnInit() {
      //this.customer = new Customer(0,"","",0,"");     
      this.enableToedit = true;
  }

  onSave(customerForm : NgForm,custId:number){   

    for(let key in customerForm.value){
        if(customerForm.value[key].length !=0){
          (this.customer as any) [key] = customerForm.value[key];
        }
    }
    console.log( this.customer);
    this.customerService.saveCustomer(this.customer);
    this.reset();
  }

  reset(){
    //alert('reset');
    this.customer = new Customer(0,"","",0,"");
    console.log( this.customer);
    this.enableToedit = false;
  }

  edit(){
    this.enableToedit = false;
  }

}
