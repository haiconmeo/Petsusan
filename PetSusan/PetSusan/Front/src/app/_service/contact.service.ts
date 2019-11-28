import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './../_entities/contact'
import { catchError, retry } from 'rxjs/operators';
const URL:string ="http://localhost:8000/api/contact/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http:HttpClient
  ) { }

  addContact(contact:Contact){
     alert(JSON.stringify(contact))
     let httpOptons = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };

    return this.http.post("http://localhost:8000/api/contact/",JSON.stringify(contact),httpOptons)
  
  }
  // addContact():Observable<Contact[]>{
  //   return this.httpClient.get<Contact[]>(URL);
  // }
}
