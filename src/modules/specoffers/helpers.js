import store from 'store';
import * as dictConstants from '../dictionaries/constants';
import {isDictLoaded} from '../dictionaries/helpers';
import {getSpecofferEnrolments, getSpecofferEnrolmentsBySpecofferId} from './reducers/view.js';

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

/**
 * check if enrolments loaded && dictionaries (used only inside enrolment list container)
 * @param specofferId
 * @returns {*|boolean}
 */
export function isDataForEnrolmentLoaded(specofferId) {
  let state = store.getState();
  let entity = getSpecofferEnrolments(state);

  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state.dictionaries)
    && !entity.isLoading
    && !!entity.data[specofferId];
}

/**
 * check if specoffers loaded && dictionaries (used only inside specoffers list container)
 * @returns {*|boolean}
 */
export function isDataForSpecoffersLoaded() {
  let state = store.getState();
  let entity = state.specoffers.list;

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
  return state.specoffers.list.resources[index]['id'];
}

export function getEnrolmentIdByIndex(specofferId, index) {
  let state = store.getState();
  let entity = getSpecofferEnrolmentsBySpecofferId(state, specofferId);
  return entity.resources[index]['id'];
}