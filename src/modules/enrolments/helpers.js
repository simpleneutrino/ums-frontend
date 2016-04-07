import store from 'store';
import * as dictConstants from '../dictionaries/constants';
import {isDictLoaded} from '../dictionaries/helpers';
import * as constants from './constants';

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

export function getEnrolmentIdByIndex(index) {
  let state = store.getState();
  return state.enrolments.list.resources[index]['id'];
}

/**
 * check if data is loaded
 * @param entityData
 * @returns {boolean}
 */
export function isEntityDataLoaded(entityData) {
  return !entityData.isLoading && (entityData.resources && !!entityData.resources.length);
}

/**
 * check if enrolments loaded && dictionaries (used only inside enrolment list container)
 * @param reducerName
 * @returns {*|boolean}
 */
export function isDataForEnrolmentLoaded() {
  let state = store.getState();
  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state.dictionaries)
    && isEntityDataLoaded(state.enrolments.list);
}

/**
 * check if data is loaded
 * @param storeState
 * @param reducerName
 * @returns {boolean}
 */
export function isEntityDataForOneLoaded(entityData, params) {
  let data = entityData.data[params.enrolId];
  return !entityData.isLoading && (data && !!Object.keys(data).length);
}

/**
 * check if enrolments loaded && dictionaries (used only inside enrolment view container)
 * @param reducerName
 * @returns {*|boolean}
 */
export function isDataForOneEnrolmentLoaded(params = {}) {
  let state = store.getState();
  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state.dictionaries)
    && isEntityDataForOneLoaded(state.enrolments.view.mainInfo, params);
}

export function decodeOneEnrolment(item, dictionaries) {
  if (!item) return {};

  let {DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES} = dictionaries;
  let {
    isStateNames,
    isContractNames,
    isPrivilegeNames,
    isHostelNames,
    isEducationStateNames,
    isInterviewNames,
    isOriginalNames
  } = constants;

  return Object.assign({}, item, {
    departmentId: DEPARTMENTS.resourcesMap[item.departmentId],
    enrolmentTypeId: ENROLMENTS_TYPES.resourcesMap[item.enrolmentTypeId],
    isState: isStateNames[item.isState],
    isContract: isContractNames[item.isContract],
    isPrivilege: isPrivilegeNames[item.isPrivilege],
    isHostel: isHostelNames[item.isHostel],
    enrolmentStatusTypeId: ENROLMENTS_STATUS_TYPES.resourcesMap[item.enrolmentStatusTypeId],
    isEducationState: isEducationStateNames[item.isEducationState],
    isInterview: isInterviewNames[item.isInterview],
    isOriginal: isOriginalNames[item.isOriginal]
  });
}

/**
 *
 * @param rowEnrolments - list of row enrolments
 * @param dictionaries - dictionary state
 * @returns {Array} - array of decoded enrolments
 */
export function decodeEnrolments(rowEnrolments, dictionaries) {
  if (!rowEnrolments) return [];

  return rowEnrolments.resources.map((item)=> {
    return decodeOneEnrolment(item, dictionaries);
  });
}
