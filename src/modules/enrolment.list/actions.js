import { LOAD_ALL_ENROLMENTS, LOAD_ENROLMENT_BY_ID} from './constants'
import { BASIC_URL } from '../../constants'

export function loadAllEnrolments() {
  console.log(LOAD_ALL_ENROLMENTS);
  return {
    type: LOAD_ALL_ENROLMENTS,
    callAPI: {
      key: 'enrolments',
      url: `${BASIC_URL}/enrolments`
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
      key: 'enrolments',
      url: `${BASIC_URL}/enrolments/${enrolmentId}`
    }
  }
}