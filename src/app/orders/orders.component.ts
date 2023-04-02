import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderList:Products[] = [];

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.navToCart();
  }

  navToCart(){
    
    this.auth.getOrders().subscribe(res =>{
      this.orderList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        data.p_price=parseInt(data.p_price);
        //this.total=this.total+data.p_price;
        return data;
      })
      this.orderList=this.orderList.filter(x=>x.email==this.auth.getSession('email'))
      
    },err =>{
      alert('Error while fetching product data');
    }
  
    )
  } 
}