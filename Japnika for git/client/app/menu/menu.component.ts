import { Component } from '@angular/core';
import {RestUtilsService} from '../rest-utils.service';
import { Category } from '../category';
import { Product } from '../product';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private restUtils : RestUtilsService, private router :Router){}

categories: Category[]=[];
products: Product[]=[];
copyProducts:Product[]=[];
subProducts : Subscription |undefined ;
subCatgories : Subscription |undefined ;

ngOnInit(){
  this.GetCategories();
  this.GetProducts();
  if(!sessionStorage["Cart"]){
    sessionStorage.setItem("Cart", '{"products": [], "fullPrice": 0}')
  }
}

GetCategories(){
   this.subCatgories= this.restUtils.GetData('http://localhost:3000/Category').subscribe(data=>this.categories=data);
}
  GetProducts(){
   this.subProducts= this.restUtils.GetData('http://localhost:3000/Product').subscribe(data=>{this.products=data;
    this.copyProducts=this.products.filter(p=>p.Catgory==="652ed80aedd8a9fb9d9cf8a9")
  });
}

ChangeCategory(CategoryId: string){
    this.copyProducts=this.products.filter(p=>p.Catgory===CategoryId)
}

GoToProduct(Id:string){
    this.router.navigate(["/product", Id]);
}

ngOnDestroy(){
  this.subCatgories?.unsubscribe();
  this.subProducts?.unsubscribe();
}

}
