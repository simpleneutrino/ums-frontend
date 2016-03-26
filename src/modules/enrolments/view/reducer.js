import * as types from '../constants';

export default function enrolments(state = {isLoading: false}, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_ENROLMENT_START:
      return Object.assign({}, state, {isLoading: true, loaded: false, data: {}});

    case types.LOAD_ONE_ENROLMENT_SUCCESS:
      return Object.assign({}, state, {isLoading: false, loaded: true}, {data: action.response});

    case types.LOAD_ONE_ENROLMENT_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}