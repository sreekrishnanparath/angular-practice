import { Injectable } from '@angular/core';
import { Customer } from '../DTO/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers : Customer [] = [];
  constructor() { 

    
    this.customers.push(new Customer(1,"sree123","Sree",100,"1234"));
    this.customers.push(new Customer(2,"hari123","Hari",200,"5467"));
    this.customers.push(new Customer(3,"nad123","Nandan",300,"9999"));
    this.customers.push(new Customer(4,"mat123","Mathwes",400,"5555"));

  }

  getCustomers(){
    return this.customers;
  }

  saveCustomer(cust : Customer){
    if(cust.customerNumber ==0){    
        cust.customerNumber  = this.customers.length +1;   
        this.customers.push(cust);
    }else{
      let itemIndex = this.customers.findIndex(item => item.customerNumber == cust.customerNumber);
      this.customers[itemIndex] = cust;
    }
    //
  }
}
