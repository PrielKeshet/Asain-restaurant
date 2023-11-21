import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestUtilsService } from '../rest-utils.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private router:Router, private restUtils:RestUtilsService){}

credit : any={"creditNumber":"","expiryYear":"","expiryMonth":"","securityCode":"","userId":""};
cart:any={};
sub : Subscription |undefined ;


FinishOrder(form:any){
  if(!form.valid){
    alert("נא להכניס את כל השדות בטופס");
    return;
  }
  this.cart=JSON.parse(sessionStorage["Cart"]);
  let products: any[]=[];
  this.cart.products.forEach((p:any) => {
    let notes:string[]=p.notes.map((n:any) =>  n._id );
    products.push({"ProductId":p.food._id, "MyExtras":notes})
  });
  let finalOrder:any={"FullName":this.cart.UserDetails.FullName,"FullPrice": this.cart.fullPrice,
   "Addres": this.cart.UserDetails.Addres,"Mail": this.cart.UserDetails.Mail ,
   "Products": products, "Phone": this.cart.UserDetails.Phone, 
   "Credit":{"CardNum":this.credit.creditNumber, "Date": `${this.credit.expiryMonth}/${this.credit.expiryYear}`, "CVV":this.credit.securityCode, "UserId":this.credit.userId } }
  this.sub=this.restUtils.AddItem("http://localhost:3000/order", finalOrder )
  .subscribe((data: any)=>{
    sessionStorage.setItem("orderId", data._id);
    this.router.navigate(["/finished"]);
  })
 }
 ngOnDestroy(){
  this.sub?.unsubscribe();
}
}
