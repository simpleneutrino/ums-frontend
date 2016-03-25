import * as types  from './constants'

export default function (state = {}, action = {}) {
  switch (action.type) {

    case types.STATISTICS_LOAD_START:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {isLoading: true}
      });

    case types.STATISTICS_LOAD_SUCCESS:
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          loaded: true,
          data: action.response
        }
      });

    case types.STATISTICS_LOAD_FAIL:
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