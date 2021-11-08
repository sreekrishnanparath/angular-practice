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

  addCall(){
    if(this.customer.customerNumber>0){
      this.customer.calls.splice(0,0,new Call(new Date(),""));
      console.log(this.customer.calls);
    }
  
  }

}
