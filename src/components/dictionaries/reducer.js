import {createDataMap} from './helpers';
import * as types  from './constants';

export default function dictionaries(state = {}, action = {}) {
  switch (action.type) {

    case types.DICTIONARY_LOAD_START:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {isLoading: true}
      });

    case types.DICTIONARY_LOAD_SUCCESS:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          loaded: true,
          resources: action.response.resources,
          resourcesMap: createDataMap(action.response.resources)
        }
      });

    case types.DICTIONARY_LOAD_FAIL:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          loaded: false,
          error: action.error.message
        }
      });

    default:
      return state;
  }
}