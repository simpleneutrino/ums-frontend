import * as types from '../constants';
import {LOCATION_CHANGE} from 'react-router-redux';

import lcache from '../../../system/lcache';
import { TIMEPERIODID_CHANGED } from '../../settings/duck';

const defaultState = {
  isLoading: false,
  resources: [],
  specoffersFieldNames: types.SPECOFFERS_FIELD_NAMES,
  timePeriodId: lcache.get('timePeriodId') || 8,
  limit: 300,
  error: null
};

export default function list(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ALL_SPECOFFERS_START:
      return Object.assign({}, state, {isLoading: true, resources: [], error: null});

    case types.LOAD_ALL_SPECOFFERS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          error: null
        },
        action.response
      );

    case types.LOAD_ALL_SPECOFFERS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: []
        }
      );

    case LOCATION_CHANGE: // listen to query parameters changes
      //if (action.payload.pathname !== '/specoffers') return state;
      let {
        timePeriodId = state.timePeriodId,
        limit = state.limit } = action.payload.query;
      return Object.assign({}, state, {timePeriodId, limit});

    case types.SPECOFFERS_LIST_WIDTH_CHANGED:
      let changedName = {
        'name': state.specoffersFieldNames[action.payload.columnKey].name,
        'width': action.payload.newColumnWidth
      };
      return Object.assign({}, state,
        {
          specoffersFieldNames: {...state.specoffersFieldNames, [action.payload.columnKey]: changedName}
        }
      );

    default:
      return state;
  }
}
