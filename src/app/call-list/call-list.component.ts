import { Component, Input, OnInit } from '@angular/core';
import { Call } from '../DTO/Call';
import { Customer } from '../DTO/Customer';

@Component({
  selector: 'app-call-list',
  templateUrl: './call-list.component.html',
  styleUrls: ['./call-list.component.css']
})
export class CallListComponent implements OnInit {

  @Input() customer : Customer = new Customer(0,"","",0,"");
  
  constructor() { }

  ngOnInit() {
    this.customer = new Customer(0,"","",0,"");
  }

  //Add call
  addCall(){
    if(this.customer.customerNumber==0){
      alert("Please select any customer!");
      return;
    }
    this.customer.calls.splice(0,0,new Call(new Date(),""));
  }

}
