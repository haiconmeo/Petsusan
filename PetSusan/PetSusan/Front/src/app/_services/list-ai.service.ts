import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { List } from '../_models/list-item.class';
import { List_AI } from '../_models/list-ai.class';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAiService {

  constructor(
    private http : HttpClient
  ) { }

  public AI : string = 'http://127.0.0.1:8000/api/rate_rs/3';

  getAllItems(id) : Observable<List_AI[]>{
    return this.http.get<List_AI[]>(this.AI + id);
  }

}
