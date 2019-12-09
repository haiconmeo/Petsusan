import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Cart } from '../_models/list-cart.class';
import { Cart_item } from '../_models/cart_Item';
import { GioiHang2 } from '../_entities/giohang2';
@Injectable({
  providedIn: 'root'
})
export class ListCartService {


  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';
  public API_Cart : string = 'http://127.0.0.1:8000/api/cart/';
  public API_Cart_edit : string = 'http://localhost:8000/api/cartedit/';

  constructor(
    private http : HttpClient
  ) { }

  getAllCart(id:number) : Observable<Cart_item[]>{
    return this.http.get<Cart_item[]>(this.API_Cart);
  }

  update(cart: GioiHang2): Observable<GioiHang2>{
    return  this.http.put<GioiHang2>(`${this.API_Cart_edit}${cart.id}`, cart);
  }

  delete(id): Observable<Cart[]>{
    return  this.http.delete<Cart[]>(this.API_Cart_edit + id);
  }
}
