import * as types from '../constants';

const defaultState = {
  isLoading: true,
  loaded: false,
  count: 0,
  limit: 50,
  offset: 0,
  resources: [],
  error: null
};

export default function enrolments(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ALL_ENROLMENTS_START:
      return Object.assign({}, state, {isLoading: true, loaded: false, resources: []});

    case types.LOAD_ALL_ENROLMENTS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          loaded: true
        },
        action.response
      );

    case types.LOAD_ALL_ENROLMENTS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}