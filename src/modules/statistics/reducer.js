import { LOAD_STATISTICS } from './constants'
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'

const initialState = {
  isLoading: false,
  loaded: true,
  count: 0,
  limit: 50,
  offset: 0,
  resources: [],
  error: null
};

const actionHandlers = {
  [LOAD_STATISTICS + _START]: (state, action) => {
    console.log('LOAD_STATISTICS + _START ', action);
    return Object.assign({}, state,
      {
        isLoading: true,
        loaded: false, // data is not loaded!
        resources: [] // clear data
      },
      action
    )
  },

  [LOAD_STATISTICS + _SUCCESS]: (state, action) => {
    console.log('LOAD_STATISTICS _SUCCESS action', action);
    return Object.assign({}, state,
      {
        isLoading: false,
        loaded: true
      },
      action
    )
  },

  [LOAD_STATISTICS + _FAIL]: (state, action) => action.resources
};

export default createReducer(initialState, actionHandlers)