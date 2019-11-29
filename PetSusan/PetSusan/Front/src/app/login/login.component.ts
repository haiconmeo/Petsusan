import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';
import { loginClass } from '../_entities/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','.././../css/style.css', '.././../css/bootstrap.min.css',]
})

export class LoginComponent implements OnInit {
  _login : loginClass={
    username:'',
    password:''
  }
  constructor(
    private loginservice:AuthService,
    private router :Router) { }

  ngOnInit() {
  }
  Onclick(){
    console.log("an nut dang nhap:"+this._login.username)
    this.loginservice.login(this._login)
      
    this.router.navigate(['/']);
      
    
  }
}
