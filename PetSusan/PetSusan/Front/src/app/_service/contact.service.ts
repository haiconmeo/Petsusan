import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Contact} from './../_entities/contact'
const URL:string ="http://localhost:8000/api/contact/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private httpClient:HttpClient
  ) { }
  addContact(contact:Contact):Observable<any>{
    alert(contact.Message)
    return this.httpClient.post<any>(URL,contact,httpOptions)
  }
}
