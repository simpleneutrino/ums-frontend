import { LOAD_DEPARTMENTS, LOAD_ENROLMENTS_TYPES, LOAD_ENROLMENTS_STATUS_TYPES} from './constants'
import { BASIC_URL } from '../../constants'

export function loadDepartments() {
  console.log(LOAD_DEPARTMENTS);
  return {
    type: LOAD_DEPARTMENTS,
    callAPI: {
      key: 'dictionaries',
      url: `${BASIC_URL}/departments`,
      params: {
        departmentTypeId: 1
      }
    }
  }
}

export function loadEnrolmentsTypes() {
  console.log(LOAD_ENROLMENTS_TYPES);
  return {
    type: LOAD_ENROLMENTS_TYPES,
    callAPI: {
      key: 'dictionaries',
      url: `${BASIC_URL}/enrolments/types`
    }
  }
}

export function loadEnrolmentsStatusTypes() {
  console.log(LOAD_ENROLMENTS_STATUS_TYPES);
  return {
    type: LOAD_ENROLMENTS_STATUS_TYPES,
    callAPI: {
      key: 'dictionaries',
      url: `${BASIC_URL}/enrolments/statustypes`
    }
  }
}