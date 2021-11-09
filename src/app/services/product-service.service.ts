import { Injectable } from '@angular/core';
import { Product } from '../DTO/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products : Product [] = [];
  constructor() {     
    this.products.push(new Product(1,"Car",100));
    this.products.push(new Product(2,"Laptop",200));
    this.products.push(new Product(3,"Dress",300));

  }

  //Fetch products
  getProducts(){
    return this.products;
  }

  //Save Product
  saveProduct(prod : Product){
    if(prod.productNumber ==0){    
      prod.productNumber  = this.products.length +1;   
        this.products.push(prod);
    }else{
      let itemIndex = this.products.findIndex(item => item.productNumber == prod.productNumber);
      this.products[itemIndex] = prod;
    }    
  }
}
