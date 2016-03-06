/**
 * Created by nikolaykozhukharenko on 3/6/16.
 */

import { LOAD_ALL_ENROLMENTS, LOAD_ENROLMENT_BY_ID } from './constants'
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'

const initialState = [];

const state2 = {
  isLoading: false,
  loaded: true,
  totalCount: 0,
  resources: [],
  error: null
};

const actionHandlers = {
  [LOAD_ALL_ENROLMENTS + _START]: (state, action) => {
    console.log('LOAD_ALL_ENROLMENTS _START action', action);
    return action.resources
  },

  [LOAD_ALL_ENROLMENTS + _SUCCESS]: (state, action) => {
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS action', action);
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS  state', state);
    return action.resources
  },

  [LOAD_ALL_ENROLMENTS + _FAIL]: (state, action) => action.resources,

  [LOAD_ENROLMENT_BY_ID]: () => ({ token: null })
};

export default createReducer(initialState, actionHandlers)