import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { registerComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Userdetails } from './userdetails';
import { FormComponent } from './form/form.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { ConsumerhomeComponent } from './consumerhome/consumerhome.component';
import { FarmerhomeComponent } from './farmerhome/farmerhome.component';
import { RouterModule } from '@angular/router';
import { SellproductsComponent } from './sellproducts/sellproducts.component';
import { WholesalesellerComponent } from './wholesaleseller/wholesaleseller.component';
import { RentlandsellerComponent } from './rentlandseller/rentlandseller.component';
import { BuygoodsComponent } from './buygoods/buygoods.component';
import { WholesalebidComponent } from './wholesalebid/wholesalebid.component';
import { LandrentsComponent } from './landrents/landrents.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    registerComponent,
    LoginComponent,
    FormComponent,
    AboutusComponent,
    InstructionComponent,
    ContactusComponent,
    LoginfarmerComponent,
    ConsumerhomeComponent,
    FarmerhomeComponent,
    SellproductsComponent,
    WholesalesellerComponent,
    RentlandsellerComponent,
    BuygoodsComponent,
    WholesalebidComponent,
    LandrentsComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
