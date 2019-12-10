import { Component, OnInit } from '@angular/core';
import { signupClass} from '../../_models/sign-up.class'
import { Router } from '@angular/router';
import { SignupService } from '../../_services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login.component.css']
})
export class SignupComponent implements OnInit {

  public respasswprd: '';

  public username: string;
  public email: string;
  public password: string;
  

  constructor(
    public signup : SignupService
  ) { }

  ngOnInit() {
  }

  dk(){
    let sg : signupClass = {
      username : this.username,
      email: this.email,
      password: this.password,
    };
    console.log(sg)
    this.signup.sigup(sg)
  }

  ches(){
    if(this.password !== this.respasswprd){
      alert("Password nhập lại không đúng")
    }
    else{
      this.dk();
    }
  }


}
