import * as types from '../constants';
import { TIMEPERIODID_CHANGED } from './../../settings/duck';

/**
 * list of enrolments sorted by rating;
 */
const initialRatingListState = {
  isLoading: false,
  enrolments: [],
  error: null,
  highlightedEnrolment: null
};

export default function ratingList(state = initialRatingListState, action = {}) {
  switch (action.type) {
    case types.LOAD_RATING_LIST_START:
      return Object.assign({}, state, {isLoading: true, enrolments: [], error: null});

    case types.LOAD_RATING_LIST_SUCCESS:
      console.log('LOAD_RATING_LIST_SUCCESS', action);
      return Object.assign({}, state,
        {
          isLoading: false,
          ...action.response,
          error: null
        }
      );

    case types.LOAD_RATING_LIST_FAIL:
      return Object.assign({}, state, {isLoading: false, error: action.error.message});

    case types.HIGHLIGH_ENROLMENT:
      return Object.assign({}, state, {
        highlightedEnrolment: parseInt(action.payload.enrolmentId)
      });

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state, { enrolments: [] });

    default:
      return state;
  }
}

