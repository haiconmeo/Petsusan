import { Component, OnInit } from '@angular/core';
import {loginClass} from '../../_models/login.class'
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../login.component.css']
})
export class SigninComponent implements OnInit {
  lg : loginClass={
    username:'',
    password:''
  }
 constructor(
   private stdservice : AuthService,
   private router :Router
 ) { }

 ngOnInit() {
 }
 Onclick(){
   this.stdservice.login(this.lg)
     
   // this.router.navigate(['/']);
     
   
 }

}
