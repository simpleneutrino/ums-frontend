import * as types from './constants';
import {push} from 'react-router-redux';
import {REQUEST_API} from '../../system/constants';

export function authorize(params, redirectTo) {
  let {login, password} = params;
  let token = 'Basic ' + btoa(login + ':' + password);

  return {
    type: REQUEST_API,
    request: {
      url: '/sessions/current',
      headers: {Authorization: token},
      actions: {
        success: successAuth,
        start: {type: types.AUTH_START},
        fail: {type: types.AUTH_FAIL}
      }
    },
    payload: {
      token,
      redirectTo 
    }
  };
}

function successAuth(response, ...rest) {
  return dispatch => {
    let action = Object.assign(response, ...rest);
   
    // save login and token to local storage
    window.sessionStorage.setItem('login', response.response.login);
    window.sessionStorage.setItem('token', rest[0].payload.token);
    
    dispatch({type: types.AUTH_SUCCESS, ...action});
    
    // redirect to page from which user was redirected to '/login'
    dispatch(push(rest[0].payload.redirectTo || '/'));
  };
}