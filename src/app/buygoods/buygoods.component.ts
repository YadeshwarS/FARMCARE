import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-buygoods',
  templateUrl: './buygoods.component.html',
  styleUrls: ['./buygoods.component.css']
})
export class BuygoodsComponent implements OnInit {
  productList :Products[] = [];
  
  

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();
    
  }

  getAllProducts(){
    this.auth.getProducts().subscribe(res =>{
      this.productList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }

  addToCart(product:Products){
    product.customer_id = this.auth.getSession('email');
    this.auth.addCart(product);
    alert("Product added to cart");
  }

}
