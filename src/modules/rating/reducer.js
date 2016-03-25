import { _START, _SUCCESS, _FAIL } from '../../constants'
import { SPECOFFER_CHOOSER } from './constants'
import { LOAD_ } from '../../constants'
import createReducer from '../../utils/create-reducer'

const initialState = {};

const actionHandlers = {
  [LOAD_ + SPECOFFER_CHOOSER + _START]: (state, action) => {
    console.log('load_rating_start', action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: true
        }
      }
    )
  },

  [LOAD_ + SPECOFFER_CHOOSER + _SUCCESS]: (state, action) => {
    console.log('load_rating_success', action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          ...action.payload
        }
      }
    )
  },
  [LOAD_ + SPECOFFER_CHOOSER + _FAIL]: (state, action) => {
    console.log('load_rating_fail', action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          error: action.error
        }
      }
    )
  }

};

export default createReducer(initialState, actionHandlers)