import { Component, Input, OnInit } from '@angular/core';
import { Call } from '../DTO/Call';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})

export class CallComponent implements OnInit {

  @Input() call : Call


  constructor() { }

  ngOnInit() {
    //this.call = new Call(new Date(),"");
  }

}
