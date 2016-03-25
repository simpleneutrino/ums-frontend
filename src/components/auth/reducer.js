import * as types from './constants';

export default function auth(state = {form: {}, error: {}, user: {authenticated: false}}, action = {}) {
  switch (action.type) {

    case types.AUTH_START:
      return Object.assign({}, state, {error: {}, user: {authenticated: false}});

    case types.AUTH_SUCCESS:
      return Object.assign({}, state, {user: Object.assign({authenticated: true}, action.response)});

    case types.AUTH_FAIL:
      return Object.assign({}, state, {error: action.error.message});

    case types.AUTH_LOG_OUT:
      return Object.assign({}, state, {user: {authenticated: false}});

    case types.AUTH_CHANGE_FIELD:
      return Object.assign({}, state, {form: Object.assign({}, state.form, {[action.field]: action.value})});

    default:
      return state;
  }
}