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


export function loadEnrolmentById(id) {
  return {
    type: REQUEST_API,
    request: {
      url: `/enrolments/${id}`,
      actions: {
        start: {type: types.LOAD_ONE_ENROLMENT_START},
        success: {type: types.LOAD_ONE_ENROLMENT_SUCCESS},
        fail: {type: types.LOAD_ONE_ENROLMENT_FAIL}
      }
    },
    payload: {
      id: id
    }
  };
}

export function loadBenefitsById(id) {
  return {
    type: REQUEST_API,
    request: {
      url: `/enrolments/${id}/benefits`,
      actions: {
        start: {type: types.LOAD_ONE_BENEFIT_START},
        success: {type: types.LOAD_ONE_BENEFIT_SUCCESS},
        fail: {type: types.LOAD_ONE_BENEFIT_FAIL}
      }
    },
    payload: {
      id: id
    }
  };
}

export function loadStatusesById(id) {
  return {
    type: REQUEST_API,
    request: {
      url: `/enrolments/${id}/statuses`,
      actions: {
        start: {type: types.LOAD_ONE_STATUS_START},
        success: {type: types.LOAD_ONE_STATUS_SUCCESS},
        fail: {type: types.LOAD_ONE_STATUS_FAIL}
      }
    },
    payload: {
      id: id
    }
  };
}