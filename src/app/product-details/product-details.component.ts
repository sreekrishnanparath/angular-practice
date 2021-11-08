import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../DTO/Product';
import { EventEmitter } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  @Output() selectedProduct = new EventEmitter<Product>();

  products : Product [] = [];
   
  constructor(private productService : ProductServiceService) { 

  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  productClicked(prod : Product){      
      this.selectedProduct.emit(prod);
  }
}
