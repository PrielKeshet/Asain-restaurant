import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent {

  constructor(private router:Router){}

orderId:string="";

ngOnInit(){
  sessionStorage.setItem("Cart", '{"products": [], "fullPrice": 0}');
  this.orderId=sessionStorage["orderId"];
}

Menu(){
  this.router.navigate(["/menu"]);
}


}
