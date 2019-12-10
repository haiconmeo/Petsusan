import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject  } from 'rxjs';
import { Cart } from '../_models/list-cart.class';
import { Cart_item } from '../_models/cart_Item';
import { GioiHang2 } from '../_entities/giohang2';
import { Cart_item_admin } from '../_models/cart_item_admin';
@Injectable({
  providedIn: 'root'
})
export class ListCartService {


  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';
  public API_Cart : string = 'http://127.0.0.1:8000/api/cart/';
  public API_Cart_edit : string = 'http://localhost:8000/api/cartedit/';
  public API_Cart_ADMIN : string = 'http://localhost:8000/api/cart_admin/';
  constructor(
    private http : HttpClient
  ) { }
  download(){
    this.http.get("http://localhost:8000/api/to_csv/").subscribe(
      data => {
        
      },
      err => {
       
      }
    );
    
  }
  
  getCart():Observable<Cart_item_admin[]>{
    return this.http.get<Cart_item_admin[]>(this.API_Cart_ADMIN)
  }
  getAllCart(id:number) : Observable<Cart_item[]>{
    return this.http.get<Cart_item[]>(this.API_Cart+id);
  }

  update(cart: GioiHang2): Observable<GioiHang2>{
    return  this.http.put<GioiHang2>(`${this.API_Cart_edit}${cart.id}`, cart);
  }

  delete(id): Observable<Cart[]>{

    return  this.http.delete<Cart[]>(this.API_Cart_edit + id);


  }
}
