import { Call } from "./Call"
import { Order } from "./Order"

export class Customer {

    customerNumber : number
    customerRef : string
    customerName : string
    creditLimit : number
    phone : string
    calls : Call[];
    orders : Order[];

    public constructor (
        customerNumber : number,
        customerRef : string,
        customerName : string,
        creditLimit : number,
        phone :string
    ){
            this.customerNumber = customerNumber;
            this.customerRef = customerRef;
            this.customerName = customerName;
            this.creditLimit = creditLimit;
            this.phone = phone;
            this.calls = [];
            this.orders = [];
    }
}