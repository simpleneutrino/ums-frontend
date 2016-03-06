import { _START, _SUCCESS, _FAIL, BASIC_URL, BASIC_AUTH } from '../constants'
import handleActionError from '../utils/handle-action-error'
import processResponse from '../utils/process-response'
import parseLinkHeader from 'parse-link-header'
import 'whatwg-fetch'

export default store => next => action => {
  const { callAPI, type, ...rest } = action;
  console.log('callAPI',callAPI );
  if (!callAPI) return next(action);

  next({...rest, ...{type: type + _START}});

  let myInit = {
    method: 'GET',
    headers: {
      Authorization : BASIC_AUTH,
      'Content-Type': 'application/json'
    }
  };

  fetch(BASIC_URL + callAPI.url, myInit)
    .then((response) => processResponse(response))
    .then((response) => {
      console.log(callAPI.url + ' response', response);
      next({...rest, ...{type: type + _SUCCESS}, ...response})
    })
    .catch((error) => {
      next({...rest, ...{type: type + _FAIL}, error})
    })
}