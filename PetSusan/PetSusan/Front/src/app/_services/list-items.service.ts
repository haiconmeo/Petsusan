import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { List } from '../_models/list-item.class';
import { Observable, BehaviorSubject  } from 'rxjs';
import { GioiHang } from '../_entities/gioihang';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';
  public APT_cart  :string =  'http://127.0.0.1:8000/api/cart/';
  constructor(private http : HttpClient
    ) {}
  
    p: number = 1;
    // collection: any[] = someArrayOfThings;  
  put_item(a:GioiHang) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    console.log("manh",httpOptions)
    return this.http.post("http://127.0.0.1:8000/api/cart/",JSON.stringify(a),httpOptions).subscribe(

      data  => {
      
      console.log("PUT Request is successful ", data);
      
      },
      
      error  => {
      
      console.log("Rrror", error);
      
      }
      
      );
  }
  getAllItems() : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS);
  }

  getDetails(id) : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS + id + '/');
  }

}