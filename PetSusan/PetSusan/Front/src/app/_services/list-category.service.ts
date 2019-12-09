import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Category } from '../_models/list-category.class';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCategoryService {

  public API_CATEGORY : string = 'http://127.0.0.1:8000/api/categori_loai/';

  constructor(
    private http : HttpClient
  ) { }

  getCategorys() : Observable<Category[]>{
    return this.http.get<Category[]>(this.API_CATEGORY);
  }

}



