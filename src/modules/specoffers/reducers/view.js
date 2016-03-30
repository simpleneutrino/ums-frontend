import * as types from '../constants';
import {FIELD_NAMES} from '../../enrolments/constants';
import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';

let fieldWidth = {};
FIELD_NAMES.map((item) => fieldWidth[item.field] = item.width);

const enrolmentsDefaultState = {
  isLoading: false,
  data: {},
  fieldWidth: fieldWidth,
  limit: 300,
  error: null
};

export default function specofferEnrolments(state = enrolmentsDefaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ENROLMENTS_BY_SPECOFFERS_START:
      return Object.assign({}, state, {isLoading: true, error: null});

    case types.LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          data: Object.assign({}, state.data,
            { [action.payload.specOfferId]:  action.response }),
          error: null
        }
      );

    case types.LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    case types.ENROLMENTS_LIST_WIDTH_CHANGED:
      return Object.assign({}, state,
        {
          fieldWidth: {...state.fieldWidth, [action.payload.columnKey]: action.payload.newColumnWidth}
        }
      );

    default:
      return state;
  }
}

const mainInfoDefaultState = {
  isLoading: false,
  data: {},
  error: null
};

export function mainInfo(state = mainInfoDefaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_SPECOFFER_START:
      return Object.assign({}, state, {isLoading: true, error: null});

    case types.LOAD_ONE_SPECOFFER_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          data: Object.assign({}, state.data,
            { [action.payload.specOfferId]:  action.response }),
          error: null
        }
      );

    case types.LOAD_ONE_SPECOFFER_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}

export default combineReducers({
  specofferEnrolments,
  mainInfo
});
