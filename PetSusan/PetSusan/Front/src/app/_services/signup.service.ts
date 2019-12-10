import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { signupClass } from '../_models/sign-up.class';

const URL:string ="http://127.0.0.1:8000/api/auth/register/";
var token = localStorage.getItem('token');
console.log("token "+token)

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public errors: any = [];

  constructor(
    private http:HttpClient
  ) { }

  sigup(up:signupClass){
    this.http.post(URL,JSON.stringify(up),httpOptions).subscribe(
      data => {
        localStorage.setItem('token', data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
    
  }

}
