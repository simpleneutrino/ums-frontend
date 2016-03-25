/**
 * Created by nikolaykozhukharenko on 3/6/16.
 */

import { LOAD_ENROLMENT_BY_ID } from './constants'
import { _START, _SUCCESS, _FAIL } from '../../../constants'
import createReducer from '../../../utils/create-reducer'

const initialState = {};

const actionHandlers = {
  [LOAD_ENROLMENT_BY_ID + _START]: (state, action) => {
    // console.log('LOAD_ENROLMENT_BY_ID + _START ', action);
    return Object.assign(  {}, state,
      {
        isLoading: true
      },
      action
    )
  },

  [LOAD_ENROLMENT_BY_ID + _SUCCESS]: (state, action) => {
    // console.log('LOAD_ENROLMENT_BY_ID _SUCCESS action', action);
    return Object.assign({},
      state,
      {
        isLoading: false,
        loaded: true,
        data: action
      }
    )
  },

  [LOAD_ENROLMENT_BY_ID + _FAIL]: (state, action) => {
    return Object.assign({},
      state,
      {
        isLoading: false,
        loaded: false,
        error: action.error
      }
    )
  }
};

export default createReducer(initialState, actionHandlers)