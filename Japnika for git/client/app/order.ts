
export class Order {
    constructor(public FullPrice :number, public Addres:string,public Products: [string], public Credit?:{
        CardNum: string;
        Date: string;
        CVV: string;
        UserId: string;
    } ){}
}
