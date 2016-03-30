import * as types from './constants';
import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';
import { ignoreActions } from 'redux-ignore';

import { TIMEPERIODID_CHANGED } from '../settings/widget';

/**
 * lost of departments and specoffers to choose
 */
const specofferChooserInitialState = {
  isLoading: true,
  resources: [],
  departmentId: 498,
  specofferId: null,
  error: null
};


export function specofferChooser(state = specofferChooserInitialState, action = {}) {
  switch (action.type) {
    case types.LOAD_SPECOFFER_CHOOSER_START:
      return Object.assign({}, state, {isLoading: true, resources: []});

    case types.LOAD_SPECOFFER_CHOOSER_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: [...action.response]
        }
      );

    case types.LOAD_SPECOFFER_CHOOSER_FAIL:
      return Object.assign({}, state, {isLoading: false, error: action.error.message});

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: []
        }
      );

    case LOCATION_CHANGE: // listen to query parameters changes
      //if (action.payload.pathname !== '/rating') return state;
      console.log('LOCATION_CHANGE', action);
      let {
        departmentId = state.departmentId,
        specofferId = state.specofferId } = action.payload.query;
      return Object.assign({}, state, {departmentId, specofferId});

    default:
      return state;
  }
}

/**
 * list of enrolments sorted by rating;
 */
const initialEnrolmentsState = {
  isLoading: true,
  resources: [],
  error: null
};

export function ratingList(state = initialEnrolmentsState, action = {}) {
  switch (action.type) {
    case types.LOAD_RATING_START:
      return Object.assign({}, state, {isLoading: true, resources: []});

    case types.LOAD_RATING_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: [...action.response]
        }
      );

    case types.LOAD_RATING_FAIL:
      return Object.assign({}, state, {isLoading: false, error: action.error.message});

    default:
      return state;
  }
}


export default combineReducers({
  specofferChooser: ignoreActions(specofferChooser,
    (action) => action.type === LOCATION_CHANGE && action.payload.pathname !== '/rating'),
  ratingList
});