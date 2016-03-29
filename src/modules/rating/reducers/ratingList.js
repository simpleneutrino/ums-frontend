import * as types from '../constants';

/**
 * list of enrolments sorted by rating;
 */
const initialEnrolmentsState = {
  isLoading: true,
  resources: [],
  error: null
};

export default function ratingList(state = initialEnrolmentsState, action = {}) {
  switch (action.type) {
    case types.LOAD_RATING_LIST_START:
      return Object.assign({}, state, {isLoading: true, resources: []});

    case types.LOAD_RATING_LIST_SUCCESS:
      console.log('LOAD_RATING_LIST_SUCCESS', action);
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: [...action.response]
        }
      );

    case types.LOAD_RATING_LIST_FAIL:
      return Object.assign({}, state, {isLoading: false, error: action.error.message});

    default:
      return state;
  }
}

