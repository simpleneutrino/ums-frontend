import * as types from '../constants';
import { TIMEPERIODID_CHANGED } from './../../settings/duck';

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
      return Object.assign({}, state, {isLoading: true, resources: [], error: null});

    case types.LOAD_RATING_LIST_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: [...action.response],
          error: null
        }
      );

    case types.LOAD_RATING_LIST_FAIL:
      return Object.assign({}, state, {isLoading: false, error: action.error.message});

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state, { resources: [] });

    default:
      return state;
  }
}

