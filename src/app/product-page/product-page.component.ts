import { Component, OnInit } from '@angular/core';
import { Product } from '../DTO/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {


  selectedProduct : Product;

  constructor() { }

  ngOnInit() {
  }

  setSelectedProduct(event){      
    this.selectedProduct = event;
}

}
