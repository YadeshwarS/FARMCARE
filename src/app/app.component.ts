import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isloggedin :boolean = false;
  loggedinpage:string ='';
  sellerpage:string='sellproducts';
  consumerpage:string='buyproducts';
  title = 'farmcare';
  logindetails(event:any){
    this.isloggedin = event.isloggedin;
    this.loggedinpage = event.loggedinpage;
  }

  gotoconsumer(event:any){
    this.consumerpage = 'buyproducts';
  }
}
