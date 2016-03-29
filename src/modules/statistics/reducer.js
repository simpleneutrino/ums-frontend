import * as types  from './constants';
import { TIMEPERIODID_CHANGED } from '../settings/widget';

const statisticsOneElementState = {
  isLoading: false,
  data: [],
  error: null
};

const statisticsInitialState = {
  [types.PRIORITIES]: statisticsOneElementState,
  [types.ALLOCATIONS_ADMINUNITS]: statisticsOneElementState,
  [types.ALLOCATIONS_ADMINUNITS_MAP]: statisticsOneElementState,
  [types.ALLOCATIONS_DEPARTMENTS]: statisticsOneElementState,
  [types.PLACES]: statisticsOneElementState
};

export default function (state = statisticsInitialState, action = {}) {
  switch (action.type) {

    case types.STATISTICS_LOAD_START:
      console.log('STATISTICS_LOAD_START', action);
      return Object.assign({}, state, {
        [action.payload.collectionName]: {isLoading: true}
      });

    case types.STATISTICS_LOAD_SUCCESS:
      console.log('STATISTICS_LOAD_SUCCESS', action);
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          data: action.response
        }
      });

    case types.STATISTICS_LOAD_FAIL:
      console.log('STATISTICS_LOAD_FAIL', action);
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          error: action.error.message
        }
      });

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state,
        statisticsInitialState
      );

    default:
      return state;
  }
}