/**
 * Created by nikolaykozhukharenko on 3/6/16.
 */

import * as con from './constants'
import createReducer from '../../utils/create-reducer'

const initialState = [];

const state2 = {
  isLoading: false,
  didInvalidate: false,
  totalCount: 0,
  resources: [],
  error: null
};

const actionHandlers = {
  [con.LOAD_ALL_ENROLMENTS + con._START]: (state, action) => action.resources,

  [con.LOAD_ALL_ENROLMENTS + con._SUCCESS]: (state, action) => {
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS action', action);
    console.log('LOAD_ALL_ENROLMENTS _SUCCESS  state', state);
    return action.resources
  },

  [con.LOAD_ALL_ENROLMENTS + con._FAIL]: (state, action) => action.resources,

  [con.LOAD_ENROLMENT_BY_ID]: () => ({ token: null })
};

export default createReducer(initialState, actionHandlers)