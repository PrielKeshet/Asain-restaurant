import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  constructor( private router: Router){}
  
  cart: any |undefined

  ngOnInit(){
  if(sessionStorage["Cart"]){
    this.cart= JSON.parse(sessionStorage["Cart"]);

  }
}

DeleteProduct(id:number){
  let product=this.cart.products[id];
this.cart.products.splice(id, 1);
this.cart.fullPrice-=product.food.Price;
product.notes.forEach((n:any)=>{
  this.cart.fullPrice-=n.Price;
})
this.cart.products.forEach((p: {ProductOrderId:number, food:{}, notes:[]}, index :number) => {
  p.ProductOrderId = index;
});
sessionStorage["Cart"]=JSON.stringify(this.cart)
}

DeleteNote(id:number, note: any){
  const product = this.cart.products[id];
  product.notes = product.notes.filter((n: string) => n !== note);
  this.cart.products[id]=product;
  this.cart.fullPrice-=note.Price;
  sessionStorage["Cart"]=JSON.stringify(this.cart);
}

GoToDetails(){
  this.router.navigate(["/details"])
}

}
