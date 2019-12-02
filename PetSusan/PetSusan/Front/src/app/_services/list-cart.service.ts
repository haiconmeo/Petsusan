import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Cart } from '../_models/list-cart.class';

@Injectable({
  providedIn: 'root'
})
export class ListCartService {

  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';

  constructor(
    private http : HttpClient
  ) { }

  getAllCart() : Observable<Cart[]>{
    return this.http.get<Cart[]>(this.API_ITEMS);
  }

  delete(id): Observable<Cart[]>{
    return  this.http.delete<Cart[]>(this.API_ITEMS + id);
  }
}
