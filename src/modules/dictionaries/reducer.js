import {createDataMap} from './helpers';
import * as types  from './constants';

const dictInitialState = {
  isLoading: false,
  resources: [],
  resourcesMap: [],
  error: null
};

const disctionariesDefaultState = {
  [types.DEPARTMENTS]: dictInitialState,
  [types.ENROLMENTS_TYPES]: dictInitialState,
  [types.ENROLMENTS_STATUS_TYPES]: dictInitialState,
  [types.TIMEPERIODS]: dictInitialState,
  [types.SPECOFFERS_TYPES]: dictInitialState,
  [types.EDUCATION_FORM_TYPES]: dictInitialState
};

export default function dictionaries(state = disctionariesDefaultState, action = {}) {
  switch (action.type) {

    case types.DICTIONARY_LOAD_START:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {isLoading: true}
      });

    case types.DICTIONARY_LOAD_SUCCESS:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          resources: action.response.resources,
          resourcesMap: createDataMap(action.response.resources)
        }
      });

    case types.DICTIONARY_LOAD_FAIL:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          error: action.error.message
        }
      });

    default:
      return state;
  }
}