import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

export function loadStatistics(url, collectionName) {
  return {
    type: REQUEST_API,
    request: {
      url,
      actions: {
        start: {type: types.STATISTICS_LOAD_START},
        success: {type: types.STATISTICS_LOAD_SUCCESS},
        fail: {type: types.STATISTICS_LOAD_FAIL}
      }
    },
    payload: {
      collectionName
    },
    interrupt: (store) => !!store.getState().statistics[collectionName].data.length
  };
}