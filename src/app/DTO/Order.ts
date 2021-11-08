import { Product } from "./Product";

export class Order {

    product : Product;
    qty : number;
    totalPrice : number;

    constructor( product : Product,
        qty : number,
        price : number,
        totalPrice : number){
            this.product = product;
            this.qty = qty;
            this.totalPrice = qty * 100 ;
    }
    

    
}