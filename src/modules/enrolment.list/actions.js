
import {
    LOAD_ALL_ENROLMENTS,
    LOAD_ENROLMENT_BY_ID,
    ENROLMENT_LIST_REDUCER } from './constants'


export function loadAllEnrolments() {
  console.log(LOAD_ALL_ENROLMENTS);
  return {
    type: LOAD_ALL_ENROLMENTS,
    callAPI: {
      url: `/enrolments`,
      cache: false
    },
    meta: {
      reducerName: ENROLMENT_LIST_REDUCER
    }
  }
}

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
      reducerName: ENROLMENT_LIST_REDUCER
    }
  }
}