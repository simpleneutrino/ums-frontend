//LOAD_DEPARTMENTS, LOAD_ENROLMENTS_TYPES, LOAD_ENROLMENTS_STATUS_TYPES
import { LOAD_, DICTIONARY_MAP, DICTIONARY} from './constants'
import { _START, _SUCCESS, _FAIL } from '../../constants'
import createReducer from '../../utils/create-reducer'
import { forEach } from 'lodash';

function createDataMap(data) {
  let map = [];
  forEach(data, (item) => map[item.id] = item.name);
  return map
}

const initialState = {};

const actionHandlers = {
  [LOAD_ + DICTIONARY + _START]: (state, action) => {
    console.log(LOAD_ + DICTIONARY + _START, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: true
        }
      }
    )
  },

  [LOAD_ + DICTIONARY + _SUCCESS]: (state, action) => {
    console.log(LOAD_ + DICTIONARY + _SUCCESS, action);
    return Object.assign({}, state,
      {
        [action.meta.collectionName] : {
          isLoading: false,
          loaded: true,
          resources: action.resources,
          resourcesMap: createDataMap(action.resources)
        }
      }
    )
  },
  [LOAD_ + DICTIONARY + + _FAIL]: (state, action) => {
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