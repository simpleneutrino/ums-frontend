/**
 * Created by nikolaykozhukharenko on 3/9/16.
 */

import store from '../../store'
import { constants as dicConstants } from '../dictionaries'
import { ENROLMENT_REDUCER,
  isStateNames, isContractNames, isPrivilegeNames, isHostelNames } from './constants'

let { DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES } = dicConstants;

export function isDicLoaded (listOfDict) {
  listOfDict.forEach((dicName) => {
    let dicData = store.getState()[dicName];
    if (dicData && (dicData.isLoading || !dicData.loaded || !dicData.resources.length)) {
      return false;
    }
  });
  return true;
}

export function isEntityDataLoaded  (reducerName) {
  let entityData = store.getState()[reducerName];
  return !entityData.isLoading && !!entityData.loaded && !!entityData.resources.length;
}

export function isDataForEnrolmentLoaded  () {
  console.log('isDicLoaded', isDicLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));
  console.log('isEntityDataLoaded', isEntityDataLoaded(ENROLMENT_REDUCER));
  return isDicLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]) && isEntityDataLoaded(ENROLMENT_REDUCER)
}

export function decodeEnrolments  (rowEnrolments, dictionaries) {
  let { DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES } = dictionaries;
  console.log('decodeEnrolments: rowEnrolments', rowEnrolments);
  console.log('decodeEnrolments: dictionaries', dictionaries);
  let decoded = rowEnrolments.map((item)=> {
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
  console.log('decodeEnrolments: decoded', decoded);
}
