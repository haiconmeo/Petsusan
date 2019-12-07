import { Component, OnInit } from '@angular/core';
import {loginClass} from './../_entities/login'
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
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

  ngOnInit() {
  }
  Onclick(){
    this.stdservice.login(this.lg)
      
    this.router.navigate(['/']);
      
    
  }
}
