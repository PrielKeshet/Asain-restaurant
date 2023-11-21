import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestUtilsService } from '../rest-utils.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private router:Router, private restUtils:RestUtilsService){}

deatils:any={"FullName":"","Addres":"","Phone":"","Mail":""};
cart: any={};
obj: any={};
sub : Subscription |undefined ;

SaveDetails(){
  this.obj={"FullName": this.deatils.FullName, "Addres": this.deatils.Addres, "Phone":this.deatils.Phone, "Mail":this.deatils.Mail};
  this.cart= JSON.parse(sessionStorage["Cart"]);
  sessionStorage["Cart"]=JSON.stringify({...this.cart, UserDetails:this.obj});
}

Credit(form: any){
  if (!form.valid) {
    alert("נא להכניס את כל השדות");
    return;
  } 
    this.SaveDetails();
    this.router.navigate(["/payment"])
}

Cash(form: any){
  if (!form.valid) {
    alert("נא להכניס את כל השדות");
    return;
  } 
  this.SaveDetails();
  let products: any[]=[];
  this.cart.products.forEach((p:any) => {
    let notes:string[]=p.notes.map((n:any) =>  n._id );
    products.push({"ProductId":p.food._id, "MyExtras":notes})
  });
  let finalOrder:any={"FullName":this.deatils.FullName,"FullPrice": this.cart.fullPrice, "Addres": this.deatils.Addres,"Mail": this.deatils.Mail ,"Products": products, "Phone": this.deatils.Phone }
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
