export class Product {

productNumber : number;
productName : string;
price : number;

public constructor (productNumber : number,productName : string,price : number){
    this.productName = productName;
    this.productNumber = productNumber;
    this.price = price;

}

}