
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'
import { LOAD_ } from '../../constants'
import { DICTIONARY } from './constants'
import { createDataMap } from './helpers'

const initialState = {};

const actionHandlers = {
  [LOAD_ + DICTIONARY + _START]: (state, action) => {
    // console.log('load_dict_start',LOAD_ + DICTIONARY + _START, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: true
        }
      }
    )
  },

  [LOAD_ + DICTIONARY + _SUCCESS]: (state, action) => {
    console.log('load_dict_success', LOAD_ + DICTIONARY + _SUCCESS, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          resources: action.payload.data,
          resourcesMap: createDataMap(action.payload.data)
        }
      }
    )
  },
  [LOAD_ + DICTIONARY + + _FAIL]: (state, action) => {
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