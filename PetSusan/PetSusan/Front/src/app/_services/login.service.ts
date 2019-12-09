import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { loginClass } from '../_models/login.class';
import { Observable, BehaviorSubject  } from 'rxjs';

const URL:string       ="http://localhost:8000/api/auth/login/";
const URL_load :string ="http://localhost:8000/api/auth/user/"
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
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(log:loginClass){
    this.http.post(URL,JSON.stringify(log),httpOptions).subscribe(
      data => {
        localStorage.setItem('token', data['token']);
      },
    );
  }
}
