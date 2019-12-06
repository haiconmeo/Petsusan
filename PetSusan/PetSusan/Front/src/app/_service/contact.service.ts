import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
 
  delete(contacs: Contact[]) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private http:HttpClient
  ) { }
  send(Rep: import("../_entities/Repcontact").RepContact) {
    return this.http.post("http://localhost:8000/api/contact/",JSON.stringify(Rep))
  }
  addContact(contact:Contact){
     alert(JSON.stringify(contact))
     let httpOptons = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };

    return this.http.post("http://localhost:8000/api/contact/",JSON.stringify(contact),httpOptons)
  
  }
  // delete(id:int){
  //   reutrn 
  // }
  getAllContact():Observable<Contact[]>{
    console.log("ok")
    let httpOptons = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       
      })
    };
    return this.http.get<Contact[]>(URL,httpOptons);
  }

}
