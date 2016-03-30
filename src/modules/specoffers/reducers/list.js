import * as types from '../constants';
import {LOCATION_CHANGE} from 'react-router-redux';

import lcache from '../../../system/lcache';
import { TIMEPERIODID_CHANGED } from '../../settings/duck';

let fieldWidth = {};
types.FIELD_NAMES.map((item) => fieldWidth[item.field] = item.width);

const defaultState = {
  isLoading: false,
  resources: [],
  fieldWidth: fieldWidth,
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
      return Object.assign({}, state,
        {
          fieldWidth: {...state.fieldWidth, [action.payload.columnKey]: action.payload.newColumnWidth}
        }
      );

    default:
      return state;
  }
}
