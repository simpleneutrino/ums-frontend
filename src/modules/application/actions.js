import { TIMEPERIODID_CHANGED, LOGGED_IN, HIDE_ERROR } from './constants'

export function login (form, redirect) {
  return dispatch => {
    // simulate request
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7)
      dispatch({
        type: LOGGED_IN,
        payload: { token }
      });
      // Can be used to navigate to a new route
      if (redirect) redirect()
    }, 300)
  }
}

export function hideError () {
  return { type: HIDE_ERROR }
}

export function changeTimePeriodId(timePeriodId) {
  return {
    type: TIMEPERIODID_CHANGED,
    payload: {
      timePeriodId
    }
  }
}
