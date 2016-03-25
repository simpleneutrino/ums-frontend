
import {
    LOAD_ALL_ENROLMENTS,
    ENROLMENT_LIST_REDUCER } from './constants'


export function loadAllEnrolments() {
  console.log(LOAD_ALL_ENROLMENTS);
  return {
    type: LOAD_ALL_ENROLMENTS,
    callAPI: {
      url: `/enrolments`
    },
    meta: {
      reducerName: ENROLMENT_LIST_REDUCER
    }
  }
}
