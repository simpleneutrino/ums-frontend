/**
 * Created by nikolaykozhukharenko on 3/9/16.
 */

import store from '../../store'
import { dictConstants } from '../dictionaries'
import { isDictLoaded } from '../dictionaries/helpers'
import {
  ENROLMENT_LIST_REDUCER,
  isStateNames,
  isContractNames,
  isPrivilegeNames,
  isHostelNames } from './constants'

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES } = dictConstants;


export function isEntityDataLoaded  (storeState, reducerName) {
  let entityData = storeState[reducerName];
  return !entityData.isLoading && !!entityData.loaded && !!entityData.resources.length;
}

export function isDataForEnrolmentLoaded  () {
  let state = store.getState();
  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state)
    && isEntityDataLoaded(state, ENROLMENT_LIST_REDUCER)
}

export function decodeEnrolments  (rowEnrolments, dictionaries) {
  let { DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES } = dictionaries;
  return rowEnrolments.map((item)=> {
    return Object.assign({}, item, {
      departmentId: DEPARTMENTS.resourcesMap[item.departmentId],
      enrolmentTypeId: ENROLMENTS_TYPES.resourcesMap[item.enrolmentTypeId],
      isState: isStateNames[item.isState],
      isContract: isContractNames[item.isContract],
      isPrivilege: isPrivilegeNames[item.isPrivilege],
      isHostel: isHostelNames[item.isHostel],
      enrolmentStatusTypeId: ENROLMENTS_STATUS_TYPES.resourcesMap[item.enrolmentStatusTypeId]
    })
  });
}
