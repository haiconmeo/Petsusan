import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginClass } from './../../_entities/login';
import { Profile } from 'src/app/_entities/profile';
import { Profile2 } from 'src/app/_entities/profile2';
const URL:string       ="http://localhost:8000/api/auth/login/";
const URL_load :string ="http://localhost:8000/api/auth/user/"
var token = localStorage.getItem('token');
console.log("token "+token)


// const URL:string ="http://localhost:8000/api/auth/login/";
// const URL_load :string ="http://localhost:8000/api/auth/user/"
const URL_profile :string="http://localhost:8000/api/auth/profile/"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
    
  })
}
const httpOptions2 = {
  headers: new HttpHeaders({
    
    'Authorization': 'Token '+ token

  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public errors: any = [];
      constructor(private http:HttpClient) { }



  loadUser():Observable<any>{
    

    return this.http.get<any>(URL_load,httpOptions2)
  }          
  loadprofile():Observable<Profile[]>{
      console.log("ok")
      let httpOptons = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         
        })
      };
      return this.http.get<Profile[]>(URL_profile,httpOptons);
    }
  
    loadprofile_user(id):Observable<Profile>{
      console.log("ok")
      let httpOptons = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
         
        })
      };
      return this.http.get<Profile>(URL_profile+id+'/',httpOptons);
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

  putProfile(log:Profile2,id:number){
    
    return this.http.put(URL_profile+id+'/',JSON.stringify(log),httpOptions).subscribe(

      data  => {
      
      console.log("PUT Request is successful ", data);
      
      },
      
      error  => {
      
      console.log("Rrror", error);
      
      }
      
      );
    
  }
}
