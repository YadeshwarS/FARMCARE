import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent implements OnInit {

   constructor() { 

    function register() {
      const username = (<HTMLInputElement>document.getElementById("username")).value;
      const email = (<HTMLInputElement>document.getElementById("email")).value;
      const password = (<HTMLInputElement>document.getElementById("password")).value;
      const confirmPassword = (<HTMLInputElement>document.getElementById("confirm-password")).value;
  
      if (password !== confirmPassword) {
          alert("Passwords do not match.");
      } else {
          // code to register user
      }
  }
  
   }
  

  ngOnInit(): void {
  }
  

}
