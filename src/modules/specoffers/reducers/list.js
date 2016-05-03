import * as types from '../constants';
import { TIMEPERIODID_CHANGED } from '../../settings/duck';

const defaultState = {
  isLoading: false,
  resources: [],
  filterByName: '',
  limit: 300,
  error: null
};

export default function list(state = defaultState, action = {}) {
  switch (action.type) {

    case types.LOAD_ALL_SPECOFFERS_START:
      return Object.assign({}, state, {isLoading: true, resources: [], error: null});

    case types.LOAD_ALL_SPECOFFERS_SUCCESS:
      return Object.assign({}, state,
        {
          isLoading: false,
          error: null
        },
        action.response
      );

    case types.LOAD_ALL_SPECOFFERS_FAIL:
      return Object.assign({}, state, {isLoading: false}, {error: action.error.message});

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state,
        {
          isLoading: false,
          resources: []
        }
      );

    default:
      return state;
  }
}
