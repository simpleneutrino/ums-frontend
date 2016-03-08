import { _START, _SUCCESS, _FAIL, BASIC_URL, BASIC_AUTH, FETCH_OPTIONS } from '../constants'
import handleActionError from '../utils/handle-action-error'
import processResponse from '../utils/process-response'
import parseLinkHeader from 'parse-link-header'
import serializeParams from '../utils/serializeParams'
import 'whatwg-fetch'

export default store => next => action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action); // only for those action that has 'callApi' field

  const { url, params, reducerName } = callAPI;

  let entityData = store.getState()[reducerName];
  const { offset, limit, isLoading } = entityData;

  console.log('isLoading', isLoading);
  if (isLoading) return next(action); // don't fetch if req already in process
  console.log('entityData', reducerName, entityData);

  next({...rest, ...{ type: type + _START}});

  fetch(BASIC_URL + url + serializeParams({offset, limit}), FETCH_OPTIONS)
    .then((response) => processResponse(response))
    .then((response) => {
      next({...rest, ...{type: type + _SUCCESS}, ...response});
    })
    .catch((error) => {
      next({...rest, ...{type: type + _FAIL}, error})
    })
}