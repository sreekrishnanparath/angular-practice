import { Injectable } from '@angular/core';
import { Customer } from '../DTO/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers : Customer [] = [];

  constructor() {     
    this.customers.push(new Customer(1,"James","J123",100,"0852102430"));
    this.customers.push(new Customer(2,"Adam","A234",200,"085210545"));
    this.customers.push(new Customer(3,"Charles","C678",300,"0852103242"));
    this.customers.push(new Customer(4,"Peter","P345",400,"4234562"));

  }

  //Fetch customer details
  getCustomers(){
    return this.customers;
  }

  //Save Customer
  saveCustomer(cust : Customer){
    if(cust.customerNumber ==0){    
        cust.customerNumber  = this.customers.length +1;   
        this.customers.push(cust);
    }else{
      let itemIndex = this.customers.findIndex(item => item.customerNumber == cust.customerNumber);
      this.customers[itemIndex] = cust;
    }    
  }
}
