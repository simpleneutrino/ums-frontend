import { DICTIONARY_MAP, LOAD_, DICTIONARY } from './constants'
import { BASIC_URL } from '../../constants'
import store from '../../store'
import serializeParams from '../../utils/serializeParams'

export function loadDictionaries(listOfDict) {
  console.log('async3', listOfDict);

  listOfDict.forEach((dicName) => {
    let { url, params, cache } = DICTIONARY_MAP[dicName];
    let action = {
      type: LOAD_ + DICTIONARY,
      callDicAPI: {
        url,
        params,
        cache,
        dicName
      },
      dicName
    };
    store.dispatch(action)
  });
}

//export function loadDepartments() {
//  return {
//    type: LOAD_DEPARTMENTS,
//    callAPI: {
//      key: 'dictionaries',
//      url: `/departments`,
//      params: {
//        departmentTypeId: 1
//      }
//    }
//  }
//}
//
//export function loadDepartments() {
//  return {
//    type: LOAD_DEPARTMENTS,
//    callAPI: {
//      key: 'dictionaries',
//      url: `/departments`,
//      params: {
//        departmentTypeId: 1
//      }
//    }
//  }
//}
//
//export function loadEnrolmentsTypes() {
//  return {
//    type: LOAD_ENROLMENTS_TYPES,
//    callAPI: {
//      key: 'dictionaries',
//      url: `/enrolments/types`
//    }
//  }
//}
//
//export function loadEnrolmentsStatusTypes() {
//  return {
//    type: LOAD_ENROLMENTS_STATUS_TYPES,
//    callAPI: {
//      key: 'dictionaries',
//      url: `/enrolments/statustypes`
//    }
//  }
//}