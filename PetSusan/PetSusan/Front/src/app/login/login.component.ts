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

    private router :Router
  ) { }

  
  public check1 : boolean = true;
  public check2 : boolean = false;
 


  ngOnInit() {
  }



  Onclick(){
    this.stdservice.login(this.lg)
      
    this.router.navigate(['/']);
      
    
  }

  kt1(){
    this.check1 = true;
    this.check2 = false;
    console.log(this.check1)
  }
  kt2(){
    this.check1 = false;
    this.check2 = true;
    console.log(this.check1)
  }
 

}
