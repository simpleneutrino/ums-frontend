import { dictConstants } from '../dictionaries'

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES } = dictConstants;

export function decodeOneEnrolment (item, dictionaries, constants) {
  let { DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES } = dictionaries;
  let {
    isStateNames,
    isContractNames,
    isPrivilegeNames,
    isHostelNames,
    isEducationStateNames,
    isInterviewNames,
    isOriginalNames } = constants;

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
  })
}

/**
 *
 * @param rowEnrolments - list of row enrolments
 * @param dictionaries - dictionary state
 * @returns {Array} - array of decoded enrolments
 */
export function decodeEnrolments  (rowEnrolments, dictionaries, constants) {
  return rowEnrolments.map((item)=> {
    return decodeOneEnrolment(item, dictionaries, constants)
  });
}