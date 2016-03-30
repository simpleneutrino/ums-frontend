import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

export function loadSpecoffersList(params) {
  return {
    type: REQUEST_API,
    request: {
      url: `/specoffers?timePeriodId=${params.timePeriodId}&limit=${params.limit}`,
      actions: {
        start: {type: types.LOAD_ALL_SPECOFFERS_START},
        success: {type: types.LOAD_ALL_SPECOFFERS_SUCCESS},
        fail: {type: types.LOAD_ALL_SPECOFFERS_FAIL}
      },
      params,
      cache: true
    },
    interrupt: (store) => !!store.getState().specoffers.list.resources.length
  };
}

export function loadOneSpecoffer(specOfferId) {
  return {
    type: REQUEST_API,
    request: {
      url: `/specoffers/${specOfferId}`,
      actions: {
        start: {type: types.LOAD_ONE_SPECOFFER_START},
        success: {type: types.LOAD_ONE_SPECOFFER_SUCCESS},
        fail: {type: types.LOAD_ONE_SPECOFFER_FAIL}
      },
      cache: true
    },
    interrupt: (store) => !!store.getState().specoffers.view.mainInfo.data[specOfferId],
    payload: {
      specOfferId: specOfferId
    }
  };
}

export function loadEnrolmentsListBySpecoffer(specOfferId) {
  return {
    type: REQUEST_API,
    request: {
      url: `/enrolments?specOfferId=${specOfferId}`,
      actions: {
        start: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_START},
        success: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS},
        fail: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL}
      },
      cache: true
    },
    interrupt: (store) => !!store.getState().specoffers.view.specofferEnrolments.data[specOfferId],
    payload: {
      specOfferId: specOfferId
    }
  };
}

export function setFieldWidth(newColumnWidth, columnKey) {
  return {
    type: types.SPECOFFERS_LIST_WIDTH_CHANGED,
    payload: {
      newColumnWidth: newColumnWidth,
      columnKey: columnKey
    }
  };
}

export function setFieldWidthEnrolments(newColumnWidth, columnKey) {
  return {
    type: types.ENROLMENTS_LIST_WIDTH_CHANGED,
    payload: {
      newColumnWidth: newColumnWidth,
      columnKey: columnKey
    }
  };
}