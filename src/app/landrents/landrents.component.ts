import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landrents',
  templateUrl: './landrents.component.html',
  styleUrls: ['./landrents.component.css']
})
export class LandrentsComponent implements OnInit {
  landList :Land[] = [];
  logged_in_email :string = this.auth.getSession('email');
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.auth.getland().subscribe(res =>{
      this.landList = res.map((e:any) =>{
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
