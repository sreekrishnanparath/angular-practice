import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../DTO/Product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {



  @Input() product : Product;
   
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
    this.reset();
  }

  reset(){
    //alert('reset');
    this.product = new Product(0,"",0);
    console.log( this.product);
  }

}
