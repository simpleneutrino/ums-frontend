import * as types from './constants';

let initialState = {
  error: null,
  user: {authenticated: false}
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {

    case types.AUTH_START:
      return Object.assign({}, state, {error: null, user: {authenticated: false}});

    case types.AUTH_SUCCESS:
      return Object.assign({}, state, {
        user: Object.assign({
          authenticated: true,
          error: null
        },
          action.response)
      });

    case types.AUTH_FAIL:
      return Object.assign({}, state, {error: action.error.message});

    case types.AUTH_LOG_OUT:
      return Object.assign({}, state, {user: {authenticated: false}});
    
    default:
      return state;
  }
}