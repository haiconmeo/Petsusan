import { Action, createReducer, on } from '@ngrx/store';
import { AuthActionTypes, All } from '../actions/auth.actions';
import { loginClass } from './../../_entities/login';
export const authFeatureKey = 'auth';

export interface State {
  user : loginClass|null;
  isAuthenticated: boolean;
  error : string |null;
  

}

export const initialState: State = {
  user : null,
  isAuthenticated: false,
  error : null
};



export function reducer(state= initialState,  action: All) :State {
  switch(action.type){
    case  AuthActionTypes.LOGIN_SUCCESS:{
      return {
        ...state,isAuthenticated: true,error:null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        error: 'Incorrect email and/or password.'
      };
    

  }
}
}

