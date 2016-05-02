import {AUTH_NEEDED, AUTH_SUCCESS} from './constants'
/**
 * @param auth {Object} state from the store
 * @param path - e.g. '/enrolments'
 * @param requiredAuth {Array} of strings
 * @returns {boolean}
 */
export function checkPermission(auth, path, requiredAuth = []) {
  let isRequreAuth = requiredAuth.some((route) => {
    return !route.indexOf(path)
  });
  if (!isRequreAuth) return true;

  if (auth.user.authenticated) return true;

  return false;
}

/**
 * 
 * @param auth {Object} state from the store
 * @param location {Object}
 * @returns null | error string
 */
export function getError ({auth, location}) {
  if (auth.error) return auth.error;
  if (location.query.next) {
    return AUTH_NEEDED
  }
  return false
}


export function initLogin(dispatch) {
  let login = window.sessionStorage.getItem('login');
  let token = window.sessionStorage.getItem('token');
  if (login && token) {
    dispatch({type: AUTH_SUCCESS, response: {login}, payload: {token}})
  }
}