import store from 'store';
import * as dictConstants from '../dictionaries/constants';
import {isDictLoaded} from '../dictionaries/helpers';
import {SPECOFFERS_REDUCER, SPECOFFERS_VIEW_REDUCER,
   SPECOFFERS_ENROLMENTS_REDUCER, SPECOFFERS_LIST_REDUCER} from './constants';

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

/**
 * check if enrolments loaded && dictionaries (used only inside enrolment list container)
 * @param reducerName
 * @returns {*|boolean}
 */
export function isDataForEnrolmentLoaded(specOfferId) {
  let state = store.getState();
  let entity = state[SPECOFFERS_REDUCER][SPECOFFERS_VIEW_REDUCER][SPECOFFERS_ENROLMENTS_REDUCER];

  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state.dictionaries)
    && !entity.isLoading
    && !!entity.data[specOfferId];
}

/**
 * check if specoffers loaded && dictionaries (used only inside specoffers list container)
 * @param reducerName
 * @returns {*|boolean}
 */
export function isDataForSpecoffersLoaded(reducerName) {
  let state = store.getState();
  let entity = state[SPECOFFERS_REDUCER][reducerName];

  return isDictLoaded([DEPARTMENTS], state.dictionaries)
    && !entity.isLoading;
}

/**
 *
 * @param rowSpecoffers - list of row specoffers
 * @returns {Array} - array of decoded specoffers
 */
export function decodeSpecoffers(rowSpecoffers, dictionaries) {
  return rowSpecoffers.resources.map((item)=> {
    return decodeOneSpecoffer(item, dictionaries);
  });
}

export function decodeOneSpecoffer(item, dictionaries) {
  if (!item) return {};

  let {DEPARTMENTS} = dictionaries;

  return Object.assign({}, item, {
    departmentId: DEPARTMENTS.resourcesMap[item.departmentId]
  });
}

export function getSpecofferIdByIndex(index) {
  let state = store.getState();
  return state[SPECOFFERS_REDUCER][SPECOFFERS_LIST_REDUCER].resources[index]['id'];
}

export function getEnrolmentIdByIndex(specofferId, index) {
  let state = store.getState();
  let entity = state[SPECOFFERS_REDUCER][SPECOFFERS_VIEW_REDUCER][SPECOFFERS_ENROLMENTS_REDUCER];
  return entity.data[specofferId].resources[index]['id'];
}