import {AUTH_SUCCESS} from '../../modules/auth/constants';

const defaultState = {
  backendHost: __BASIC_URL__,
  token: 'Basic YWRtaW46bmltZGE='
};

export default function config(state = defaultState, action = {}) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, {token: action.payload.token});
    default:
      return state;
  }
}