import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginClass } from './../../_entities/login';
const URL:string ="http://localhost:8000/api/auth/login/";
const URL_load :string ="http://localhost:8000/api/auth/user/"
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public errors: any = [];
  constructor(private http:HttpClient) { }
  loadUser(){
    var token = localStorage.getItem('token');
    if (token){
      this.http.post(URL,JSON.stringify({token}),httpOptions).subscribe(
        data => {
          
        },
        err => {
          this.errors = err['error'];
        }
      );
    }
  }
  login(log:loginClass){
    this.http.post(URL,JSON.stringify(log),httpOptions).subscribe(
      data => {
        localStorage.setItem('token', data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
    
  }
}
