import * as types from './constants';

const defaultState = {
  isLoading: true,
  resources: [],
  error: null
};

export default function enrolments(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_SPECOFFER_CHOOSER_START:
      console.log('LOAD_SPECOFFER_CHOOSER_START', action);
      return Object.assign({}, state,
        {
          isLoading: true, resources: []
        }
      );

    case types.LOAD_SPECOFFER_CHOOSER_SUCCESS:
      console.log('LOAD_SPECOFFER_CHOOSER_SUCCESS', action);
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: [...action.response]
        }
      );

    case types.LOAD_SPECOFFER_CHOOSER_FAIL:
      console.log('LOAD_SPECOFFER_CHOOSER_FAIL', action);
      return Object.assign({}, state,
        {
          isLoading: false,
          error: action.error.message
        }
      );

    default:
      return state;
  }
}