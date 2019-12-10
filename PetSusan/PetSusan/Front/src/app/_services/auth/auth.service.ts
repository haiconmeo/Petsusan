import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginClass } from '../../_models/login.class';
// import { Profile } from 'src/app/_entities/profile';
// import { Profile2 } from 'src/app/_entities/profile2';
// import { Tinh } from 'src/app/_entities/Tinh';
// import { Huyen } from 'src/app/_entities/huyen';
// import { Xa } from 'src/app/_entities/xa';
const URL:string       ="http://localhost:8000/api/auth/login/";
const URL_load :string ="http://localhost:8000/api/auth/user/"
var token = localStorage.getItem('token');
console.log("token "+token)


// const URL:string ="http://localhost:8000/api/auth/login/";
// const URL_load :string ="http://localhost:8000/api/auth/user/"
const URL_profile :string="http://localhost:8000/api/auth/profile/"
const URL_tinh :string="http://localhost:8000/api/city/"
const URL_huyen :string="http://localhost:8000/api/huyen/"
const  URL_xa :string ="http://localhost:8000/api/xa/"
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
  // loadprofile():Observable<Profile[]>{
  //     console.log("ok")
  //     let httpOptons = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
         
  //       })
  //     };
  //     return this.http.get<Profile[]>(URL_profile,httpOptons);
  //   }
  
    // loadprofile_user(id):Observable<Profile>{
    //   console.log("ok")
    //   let httpOptons = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
         
    //     })
    //   };
    //   return this.http.get<Profile>(URL_profile+id+'/',httpOptons);
    // }
    // load_tinh():Observable<Tinh[]>{
      
    //   let httpOptons = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
         
    //     })
    //   };
    //   return this.http.get<Tinh[]>(URL_tinh,httpOptons);
    // }


  //   load_huyen(id):Observable<Huyen[]>{
      
  //     let httpOptons = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
         
  //       })
  //     };
  //     return this.http.get<Huyen[]>(URL_huyen+id,httpOptons);
  //   }

  //   load_xa(id):Observable<Xa[]>{
      
  //     let httpOptons = {
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
         
  //       })
  //     };
  //     return this.http.get<Xa[]>(URL_xa+id,httpOptons);
  //   }
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

  // putProfile(log:Profile2,id:number){
    
  //   return this.http.put(URL_profile+id+'/',JSON.stringify(log),httpOptions).subscribe(

  //     data  => {
      
  //     console.log("PUT Request is successful ", data);
      
  //     },
      
  //     error  => {
      
  //     console.log("Rrror", error);
      
  //     }
      
  //     );
    
  // }
}
