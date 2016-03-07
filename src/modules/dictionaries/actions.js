import { LOAD_DEPARTMENTS, LOAD_ENROLMENTS_TYPES, LOAD_ENROLMENTS_STATUS_TYPES} from './constants'
import { BASIC_URL } from '../../constants'
import store from '../../store'


export function loadDepartments() {
  return {
    type: LOAD_DEPARTMENTS,
    callAPI: {
      key: 'dictionaries',
      url: `/departments`,
      params: {
        departmentTypeId: 1
      }
    }
  }
}

export function loadEnrolmentsTypes() {
  return {
    type: LOAD_ENROLMENTS_TYPES,
    callAPI: {
      key: 'dictionaries',
      url: `/enrolments/types`
    }
  }
}

export function loadEnrolmentsStatusTypes() {
  return {
    type: LOAD_ENROLMENTS_STATUS_TYPES,
    callAPI: {
      key: 'dictionaries',
      url: `/enrolments/statustypes`
    }
  }
}