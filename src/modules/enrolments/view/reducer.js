import * as types from '../constants';
import {combineReducers} from 'redux';

const mainInfoDefaultState = {
  isLoading: false,
  data: {}
};

export function mainInfo(state = mainInfoDefaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_ENROLMENT_START:
      return Object.assign({}, state, {isLoading: true});

    case types.LOAD_ONE_ENROLMENT_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          data: Object.assign({}, state.data,
            { [action.payload.id]:  action.response })
        }
      );

    case types.LOAD_ONE_ENROLMENT_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}

const benefitsDefaultState = {
  isLoading: false,
  data: {}
};

export function benefits(state = benefitsDefaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_BENEFIT_START:
      return Object.assign({}, state, {isLoading: true});

    case types.LOAD_ONE_BENEFIT_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          data: Object.assign({}, state.data,
            { [action.payload.id]:  action.response })
        }
      );

    case types.LOAD_ONE_BENEFIT_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}

const statusesDefaultState = {
  isLoading: false,
  data: {}
};

export function statuses(state = statusesDefaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ONE_STATUS_START:
      return Object.assign({}, state, {isLoading: true});

    case types.LOAD_ONE_STATUS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          data: Object.assign({}, state.data,
            { [action.payload.id]:  action.response })
        }
      );

    case types.LOAD_ONE_STATUS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    default:
      return state;
  }
}

export default combineReducers({
  mainInfo,
  benefits,
  statuses
});
