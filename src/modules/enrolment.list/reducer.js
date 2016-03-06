/**
 * Created by nikolaykozhukharenko on 3/6/16.
 */

import { LOAD_ALL_ENROLMENTS, LOAD_ENROLMENT_BY_ID } from './constants'
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'

const initialState = {
  isLoading: false,
  loaded: true,
  count: 0,
  limit: 0,
  offset: 4,
  resources: [],
  error: null
};

const actionHandlers = {
  [LOAD_ALL_ENROLMENTS + _START]: (state, action) => {
    console.log('LOAD_ALL_ENROLMENTS + _START ', action);
    return Object.assign(
      {},
      state,
      { isLoading: true },
      action
    )
  },

  [LOAD_ALL_ENROLMENTS + _SUCCESS]: (state, action) => {
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS action', action);
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS  state', state);
    return Object.assign(
      {},
      state,
      {
        isLoading: false,
        loaded: true
      },
      action
    )
  },

  [LOAD_ALL_ENROLMENTS + _FAIL]: (state, action) => action.resources,

  [LOAD_ENROLMENT_BY_ID]: () => ({ token: null })
};

export default createReducer(initialState, actionHandlers)