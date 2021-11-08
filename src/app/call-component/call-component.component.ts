import { Component, Input, OnInit } from '@angular/core';
import { Call } from '../DTO/Call';

@Component({
  selector: 'app-call-component',
  templateUrl: './call-component.component.html',
  styleUrls: ['./call-component.component.css']
})
export class CallComponentComponent implements OnInit {

  @Input() call : Call


  constructor() { }

  ngOnInit() {
    //this.call = new Call(new Date(),"");
  }

}
