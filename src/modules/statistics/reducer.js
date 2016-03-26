import * as types  from './constants';

export default function (state = {}, action = {}) {
  switch (action.type) {

    case types.STATISTICS_LOAD_START:
      console.log('STATISTICS_LOAD_START', action);
      return Object.assign({}, state, {
        [action.payload.collectionName]: {isLoading: true}
      });

    case types.STATISTICS_LOAD_SUCCESS:
      console.log('STATISTICS_LOAD_SUCCESS', action);
      return Object.assign({}, state, {
        [action.payload.collectionName]: {
          isLoading: false,
          data: action.response
        }
      });

    case types.STATISTICS_LOAD_FAIL:
      console.log('STATISTICS_LOAD_FAIL', action);
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