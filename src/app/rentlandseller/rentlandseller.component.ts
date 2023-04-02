import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Land } from '../land';

@Component({
  selector: 'app-rentlandseller',
  templateUrl: './rentlandseller.component.html',
  styleUrls: ['./rentlandseller.component.css']
})
export class RentlandsellerComponent implements OnInit {
  land_owner:string='';
  email:string=this.auth.getSession('email');
  area:string='';
  land_img:string='';
  land_address:string='';
  land:Land={
    id:'',
    email:'',
    land_owner:'',
    area:'',
    land_img:'',
    land_address:''
  }


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  addLand(){
    if(this.land_img == '' || this.land_owner == "" || this.land_img == '' || this.land_address == ''){
      alert("Fill all the fields");

    }
    else{
      this.land.email = this.email;
      this.land.land_address = this.land_address;
      this.land.land_owner = this.land_owner;
      this.land.land_img = this.land_img;
      this.land.area = this.area;
      this.auth.addLand(this.land);
      alert("Land added for bid");
    }
  }


}
