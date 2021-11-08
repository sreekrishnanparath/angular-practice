import { Component, OnInit } from '@angular/core';
import { Customer } from '../DTO/Customer';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {


  selectedCustomer : Customer;

  setSelectedCustomer(event){      
    this.selectedCustomer = event;
}

  constructor() { }

  ngOnInit() {
  }

}
