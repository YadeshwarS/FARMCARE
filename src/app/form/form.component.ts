import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Userdetails } from '../userdetails';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  login_type:string = "form";
  login_email:string = '';
  login_password:string='';
  logged_in_email : string = '';
  logged_in_password : string = '';
  userList:Userdetails[]=[];
  @Output() logindetails = new EventEmitter<any>();
  user:Userdetails = {
    id:'',
    username:'',
    email:'',
    reg_type:'',
    password:''
  }
  reg_username:string='';
  reg_email:string='';
  reg_password:string='';
  reg_c_password:string='';
  reg_type:string='';
  logged_in:string = 'not exist';
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.get_user_data(); 
  }

  // login_ex(){
  //   this.auth.getUsers().subscribe((res: any[]) =>{
  //     this.userList = res.map((e:any) =>{
  //       const data = e.payload.doc.data();
  //       data.id = e.payload.doc.id;
  //       return data;
  //     })
  //   this.userList.forEach(element=>{
  //     if(element.email == this.login_email && element.password == this.login_password){
  //       this.logged_in_email = element.email;
  //       this.logged_in_password = element.password;
  //       this.logged_in = true;
  //     }
  //     else{
  //       this.logged_in = false;
  //     }
  //   })}
  //   )
      
  // }

  login(){
    
    this.login_exist();
    if(this.logged_in == 'consumer login'){
      this.auth.setSession('email',this.logged_in_email);
      // this.logindetails.emit({emailid:this.logged_in_email,password:this.logged_in_password});
      this.logindetails.emit({isloggedin:true,loggedinpage:this.logged_in});
      // this.router.navigateByUrl('consumerhome');
      
    }
    else if(this.logged_in == 'farmer login'){
      this.auth.setSession('email',this.logged_in_email);
      this.logindetails.emit({isloggedin:true,loggedinpage:this.logged_in});
      // this.logindetails.emit({emailid:this.logged_in_email,password:this.logged_in_password});
      // this.router.navigateByUrl('farmerhome');
    }
    else{
      alert("Username or password invalid");
    }
  }

  login_exist(){
    
    this.userList.forEach(element =>{
      if(element.email == this.logged_in_email && element.password ==  this.logged_in_password){
        if(element.reg_type == 'consumer'){
          this.logged_in = 'consumer login';
        }
        else{
          this.logged_in = 'farmer login';
        }
        
      }
      
      
    });
  }

  get_user_data(){
    this.auth.getUsers().subscribe(res =>{
      this.userList = res.map((e:any) =>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
      
    },err =>{
      alert('Error while fetching product data');
    }
    )
  }

  register(){
    if(this.reg_username == "" || this.reg_c_password == "" || this.reg_email == "" || this.reg_password == "" || this.reg_type == ""){
      alert("Fill all the details");
    }
    else if(this.reg_password != this.reg_c_password){
      alert("Password and confirm password are not same");
    }
    else{
      this.user.email = this.reg_email;
      this.user.username = this.reg_username;
      this.user.reg_type = this.reg_type;
      this.user.password = this.reg_password;
      this.auth.addUser(this.user);
      alert("Registered Successfully");
      this.reset();
    }
  }

  reset(){
    this.user.id = '';
    this.user.email = '';
      this.user.username = '';
      this.user.reg_type = '';
      this.user.password = '';
  }

}
