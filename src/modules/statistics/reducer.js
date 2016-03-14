
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'
import {
    LOAD_STATISTICS,
    PRIORITIES,
    ALLOCATIONS_ADMINUNITS,
    ALLOCATIONS_DEPARTMENTS } from './constants'

const initialState = {};

const actionHandlers = {
  [LOAD_STATISTICS + _START]: (state, action) => {
    console.log(LOAD_STATISTICS + _START, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: true
        }
      }
    )
  },

  [LOAD_STATISTICS + _SUCCESS]: (state, action) => {
    console.log(LOAD_STATISTICS + _SUCCESS, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          loaded: true,
          data: action.payload.data
        }
      }
    )
  },

  [LOAD_STATISTICS + _FAIL]: (state, action) => {
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          loaded: false,
          error: action.error
        }
      }
    )
  }
};

export default createReducer(initialState, actionHandlers)