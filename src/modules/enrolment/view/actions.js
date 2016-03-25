import {
    LOAD_ENROLMENT_BY_ID,
    ENROLMENT_VIEW_REDUCER } from './constants'


export function loadEnrolmentById(enrolmentId) {
  console.dir(LOAD_ENROLMENT_BY_ID);
  return {
    type: LOAD_ENROLMENT_BY_ID,
    payload: {
      enrolmentId
    },
    callAPI: {
      url: `/enrolments/${enrolmentId}`
    },
    meta: {
      reducerName: ENROLMENT_VIEW_REDUCER
    }
  }
}