
import { BASIC_URL } from '../../constants'
import {
    LOAD_ALL_ENROLMENTS,
    LOAD_ENROLMENT_BY_ID,
    ENROLMENT_REDUCER } from './constants'


export function loadAllEnrolments() {
  console.log(LOAD_ALL_ENROLMENTS);
  return {
    type: LOAD_ALL_ENROLMENTS,
    callAPI: {
      reducerName: ENROLMENT_REDUCER,
      url: `/enrolments`
    }
  }
}

export function loadEnrolmentById(enrolmentId) {
  console.dir(LOAD_ENROLMENT_BY_ID);
  return {
    type: LOAD_ENROLMENT_BY_ID,
    data: {
      enrolmentId
    },
    callAPI: {
      reducerName: ENROLMENT_REDUCER,
      url: `/enrolments/${enrolmentId}`
    }
  }
}