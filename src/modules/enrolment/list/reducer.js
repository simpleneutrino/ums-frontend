/**
 * Created by nikolaykozhukharenko on 3/6/16.
 */

import { LOAD_ALL_ENROLMENTS } from './constants'
import { _START, _SUCCESS, _FAIL } from '../../../constants'
import createReducer from '../../../utils/create-reducer'

const initialState = {
  isLoading: false,
  count: 0,
  limit: 50,
  offset: 0,
  resources: [],
  error: null
};

const actionHandlers = {
  [LOAD_ALL_ENROLMENTS + _START]: (state, action) => {
    // console.log('LOAD_ALL_ENROLMENTS + _START ', action);
    return Object.assign(  {}, state,
      {
        isLoading: true,
        resources: [] // clear data
      },
      action
    )
  },

  [LOAD_ALL_ENROLMENTS + _SUCCESS]: (state, action) => {
    // console.log('LOAD_ALL_ENROLMENTS _SUCCESS action', action);
    return Object.assign({},
      state,
      {
        isLoading: false,
      },
      action
    )
  },

  [LOAD_ALL_ENROLMENTS + _FAIL]: (state, action) => action.resources
};

export default createReducer(initialState, actionHandlers)