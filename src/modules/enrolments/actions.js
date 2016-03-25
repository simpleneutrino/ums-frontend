import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

export function loadEnrolments(params) {
  return {
    type: REQUEST_API,
    request: {
      url: '/enrolments',
      actions: {
        start: {type: types.LOAD_ALL_ENROLMENTS_START},
        success: {type: types.LOAD_ALL_ENROLMENTS_SUCCESS},
        fail: {type: types.LOAD_ALL_ENROLMENTS_FAIL}
      },
      params
    }
  };
}