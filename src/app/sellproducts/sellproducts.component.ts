import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styleUrls: ['./sellproducts.component.css']
})
export class SellproductsComponent implements OnInit {
  dealer_name : string = '';
  id : string ='';
  p_name : string='';
  p_img_path : string='';
  p_price : string='';
  qty : string='';
  category : string ='';
  product:Products = {
    id:'',
    email:'',
    dealer_name:'',
    p_name:'',
    p_price:'',
    p_img_path:'',
    category:'',
    qty:'',
    customer_id:''
  }
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  
  addProduct(){
    if(this.dealer_name == "" || this.p_price == "" || this.p_name == "" || this.qty == "" || this.p_img_path == "" || this.category == ''){
      alert("Fill all the details");
    }
    
    else{
      this.product.email = this.auth.getSession('email');
      this.product.dealer_name =this.dealer_name;
    this.product.p_name=this.p_name;
    this.product.p_price = this.p_price;
    this.product.p_img_path=this.p_img_path;
    this.product.qty = this.qty;
    this.product.category = this.category;
      this.auth.addProduct(this.product);
      alert("Product added");
      this.reset();
    }
  }

  reset(){
    this.product.id = '';
    this.product.email = '';
    this.product.dealer_name ='';
    this.product.p_name='';
    this.product.p_price = '';
    this.product.p_img_path='';
    this.product.qty = '';
    this.product.category = '';
    
    
    this.dealer_name ='';
    this.p_name='';
    this.p_price = '';
    this.p_img_path='';
    this.qty = '';
    this.category = '';
  }

}



