import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { DetailsComponent } from './details/details.component';
import { FinishedComponent } from './finished/finished.component';

const appRoutes : Routes = [{path: "", component: WelcomeComponent},
  {path: "menu", component: MenuComponent},
{path:"product/:id", component:ProductComponent},
{path: "payment", component: PaymentComponent},
{path: "details", component: DetailsComponent},
{path: "finished", component: FinishedComponent},]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    WelcomeComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent,
    DetailsComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
