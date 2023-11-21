import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestUtilsService } from '../rest-utils.service';
import { Product } from '../product';
import { Extra } from '../extra';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private ar: ActivatedRoute, private restUtils: RestUtilsService,private router :Router){}

myExtras: Extra[] = [];
product: Product ={_id:"", Catgory:"",Desc:"",Extras:[""],Img:"", Price:0, Title:""}
id: string = '';
fullOrder: { notes: any[], food: any, ProductOrderId:number } = { notes: [], food: {}, ProductOrderId:0 };
subProducts : Subscription |undefined ;
subExtras : Subscription |undefined ;

  ngOnInit() {
    this.ar.params.subscribe(data => {
      this.id = data["id"];
     this.subProducts= this.restUtils.GetById("http://localhost:3000/product", this.id).subscribe(p => {
        this.product = p;
        this.fullOrder={...this.fullOrder, food: p}
        if (this.product) {
          this.subExtras=this.restUtils.GetData("http://localhost:3000/extra").subscribe(extras => {
            this.myExtras = extras.filter(extra => this.product!.Extras.includes(extra._id));
          });
        }
      });
    });
  }
  onCheckboxChange(extra: any) {
    const index = this.fullOrder.notes.indexOf(extra);
    if (index !== -1) {
      this.fullOrder.notes.splice(index, 1); 
    } else {
      this.fullOrder.notes.push(extra);
    }
    
  }

  GoBack(){
    this.router.navigate(["/menu"]);
  }

  AddToCart(){
    let cart= JSON.parse(sessionStorage["Cart"]);
    this.fullOrder={...this.fullOrder, ProductOrderId:cart.products.length}
    cart.products.push(this.fullOrder);
    cart.fullPrice+=this.product.Price;
    this.fullOrder.notes.forEach((n:any)=>{cart.fullPrice+=n.Price})
    sessionStorage.setItem("Cart", JSON.stringify(cart));
    console.log(cart)
    this.router.navigate(["/menu"])
  }

  ngOnDestroy(){
    this.subExtras?.unsubscribe();
    this.subProducts?.unsubscribe();
  }

}
