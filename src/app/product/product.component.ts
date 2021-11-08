import { Component, OnInit } from '@angular/core';
import { Product } from '../DTO/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct : Product;

  constructor() { }

  ngOnInit() {
  }

  setSelectedProduct(event){      
    this.selectedProduct = event;
}

}
