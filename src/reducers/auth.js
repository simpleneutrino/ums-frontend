'use strict';

import { LOGIN, LOGOUT, _SUCCESS, _FAIL, _START } from '../constants';
//import { loadUserProfile } from '../actions/utils';

const initialState = {
  user: null,
  password: null,
  userRole: null,
  loggingIn: false,
  loggingOut: false,
  loginError: null
};

//function initializeState(){
//  const userProfile = loadUserProfile();
//  return Object.assign({}, initialState, userProfile);
//}
//
//export default function auth(state = {}, action = {}) {
//  switch (action.type) {
//    case LOGIN_REQUEST:
//      return Object.assign({}, state, {loggingIn: true});
//    case LOGIN_SUCCESS:
//      return Object.assign({}, state, {
//        loggingIn: false, user: action.user, role: action.role});
//    case LOGIN_FAILURE:
//      return {
//        ...state,
//        loggingIn: false,
//        user: null,
//        role: null,
//        loginError: action.error
//      };
//    case LOGOUT_REQUEST:
//      return {
//        ...state,
//        loggingOut: true
//      };
//    case LOGOUT_SUCCESS:
//      return {
//        ...state,
//        loggingOut: false,
//        user: null,
//        userRole: null,
//        loginError: null
//      };
//    case LOGOUT_FAILURE:
//      return {
//        ...state,
//        loggingOut: false,
//        logoutError: action.error
//      };
//    default:
//      return state;
//  }
//}