import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { List } from '../_models/list-item.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  public API_ITEMS : string = '../../assets/test.json';

  constructor(private http : HttpClient
    ) {}

  getAllItems() : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS);
    console.log("hel");
  }

}