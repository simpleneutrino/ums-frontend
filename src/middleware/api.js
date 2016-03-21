import { _START, _SUCCESS, _FAIL, BASIC_URL, FETCH_OPTIONS } from '../constants'
import { parseResponse } from '../utils/process-response'
import serializeParams from '../utils/serializeParams'
import 'whatwg-fetch'

export default store => next => action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action); // only for those action that has 'callApi' field

  const { url, params } = callAPI;
  const { reducerName } = meta;
  
  let entityData = store.getState()[reducerName]; // get entity (e.g. enrolmentList) state
  const { offset, limit, isLoading } = entityData;

  console.info(`URL ${url} is loading. Reducer name: ${reducerName}. Action type: ${type}`);
  if (isLoading) return next(action); // don't fetch if req already in process

  next({...rest, ...{ type: type + _START}});

  fetch(BASIC_URL + url + serializeParams({offset, limit}), FETCH_OPTIONS)
    .then((response) => parseResponse(response))
    .then((response) => {
      next({...rest, ...{type: type + _SUCCESS}, ...response});
    })
    .catch((error) => {
      next({...rest, ...{type: type + _FAIL}, error})
    })
}