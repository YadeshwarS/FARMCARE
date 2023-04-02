import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../products';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() gotoconsumer = new EventEmitter<any>();
  cartList:Products[] = [];
  total:any=0;
  page:string='cart';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.navToCart();
  }

  deleteProductcart(product:Products){
    this.auth.deleteProductCart(product);
    this.calculatetotal(this.cartList);
  }
  check(){
    alert('Your product will be soon dispatched. Continue Shopping');
    this.gotoconsumer.emit({consumer:'buyproducts'});
  }
  navToCart(){
    this.total=0;
    this.auth.getAllProductsCart().subscribe(res =>{
      this.cartList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        data.p_price=parseInt(data.p_price);
        //this.total=this.total+data.p_price;
        return data;
      })
      this.cartList=this.cartList.filter(x=>x.customer_id==this.auth.getSession('email'))
      this.calculatetotal(this.cartList);
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }
  calculatetotal(cartList:Products[]){
    this.total=0;
    cartList.forEach(element => {
      this.total=this.total+element.p_price;
    });
  }
  checkout(){
    this.cartList.forEach(element => {
      this.auth.placeOrder(element);
      this.auth.deleteProductCart(element);
    });
    
  }

}
