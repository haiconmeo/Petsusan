import { Component, OnInit } from '@angular/core';
// <<<<<<< HEAD
// import {loginClass} from './../_entities/login'
// import { Router } from '@angular/router';
// import { AuthService } from '../_services/auth/auth.service';
// =======
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { loginClass } from '../_models/login.class';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','.././../css/style.css', '.././../css/bootstrap.min.css',]
})
export class LoginComponent implements OnInit {

   lg : loginClass={
     username:'',
     password:''
   }
  constructor(
    private stdservice : AuthService,
// =======

//   lg : loginClass={
//     username:'',
//     password:''
//   }

//   constructor(
//     public stdservice : AuthService,
// >>>>>>> origin/cuong
    private router :Router
  ) { }

  ngOnInit() {

  }


  Onclick(){
    this.stdservice.login(this.lg)
      
    this.router.navigate(['/']);
      
    
  }
}
