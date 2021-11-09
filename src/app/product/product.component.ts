import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../DTO/Product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product =  new Product(0,"",0);
  enableToedit : Boolean; 

  @Input('product') 
  set setProductObject(product : Product){
    this.product = product;
    this.enableToedit = true;
  }
   
  constructor(private productService : ProductServiceService) { 
   
  }

  

  ngOnInit() {
      this.product = new Product(0,"",0);
  }

  onSave(productForm : NgForm,custId:number){   
    

    for(let key in productForm.value){
        if(productForm.value[key].length !=0){
          (this.product as any) [key] = productForm.value[key];
        }
    }
    console.log( this.product);
    this.productService.saveProduct(this.product);
    this.OnNew();
  }

  
  //On edit click
  OnEdit(){
    this.enableToedit = false;
  }

  //On new Click
  OnNew(){
    this.product = new Product(0,"",0);
    this.enableToedit = false;
  }

}
