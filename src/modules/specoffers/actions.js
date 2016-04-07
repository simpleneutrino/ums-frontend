import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

export function loadSpecoffersList(params) {
  return {
    type: REQUEST_API,
    request: {
      url: `/specoffers`,
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

export function loadOneSpecoffer(specofferId) {
  return {
    type: REQUEST_API,
    request: {
      url: `/specoffers/${specofferId}`,
      actions: {
        start: {type: types.LOAD_ONE_SPECOFFER_START},
        success: {type: types.LOAD_ONE_SPECOFFER_SUCCESS},
        fail: {type: types.LOAD_ONE_SPECOFFER_FAIL}
      },
      cache: true
    },
    interrupt: (store) => !!store.getState().specoffers.view.mainInfo.data[specofferId],
    payload: {
      specofferId: specofferId
    }
  };
}

export function loadEnrolmentsListBySpecoffer(params) {
  return {
    type: REQUEST_API,
    request: {
      url: `/enrolments`,
      actions: {
        start: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_START},
        success: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_SUCCESS},
        fail: {type: types.LOAD_ENROLMENTS_BY_SPECOFFERS_FAIL}
      },
      params,
      cache: true
    },
    interrupt: (store) => !!store.getState().specoffers.view.specofferEnrolments.data[params.specofferId],
    payload: {
      specofferId: params.specofferId
    }
  };
}

export function setSpecofferFieldWidth(newColumnWidth, columnKey) {
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