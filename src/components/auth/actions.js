import * as types from './constants'
import {push} from 'react-router-redux';
import {REQUEST_API} from '../../system/constants';

export function auth(params) {
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
      token: token
    }
  };
}

function successAuth(response, ...rest) {
  return dispatch=> {
    let action = Object.assign(response, ...rest);
    dispatch({type: types.AUTH_SUCCESS, ...action});
    dispatch(push('/'));
  };
}


export function changeField(field, value) {
  return {type: types.AUTH_CHANGE_FIELD, field, value};
}