import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
 
} from './../actions/auth.actions';

import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap, switchMap } from 'rxjs/operators';
@Injectable()
export class AuthEffects {
  apiService: any;



  constructor(private actions: Actions,
    private authService: AuthService,
    private router: Router,
    ) {}

 


}
