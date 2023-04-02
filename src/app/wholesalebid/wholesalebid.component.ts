import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Products } from '../products';

@Component({
  selector: 'app-wholesalebid',
  templateUrl: './wholesalebid.component.html',
  styleUrls: ['./wholesalebid.component.css']
})
export class WholesalebidComponent implements OnInit {
  productList :Products[] = [];
  logged_in_email :string = this.auth.getSession('email');
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.auth.getWholeProducts().subscribe(res =>{
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

  bidmade(){
    alert("Bid made you will receive your response soon in your mail");
  }


}
