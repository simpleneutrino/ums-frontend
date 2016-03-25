import { _START, _SUCCESS, _FAIL, BASIC_URL, FETCH_OPTIONS } from '../constants'
import { parseResponse } from '../utils/process-response'
import serializeParams from '../utils/serializeParams'
import 'whatwg-fetch'

/**
 * this middleware now handle all api calls from action which has 'callApi' field
 *  it's for now:
 *  1) calls fro enrolment list: [GET] '/enrolments'
 */
export default store => next => action => {
  const { callAPI, type, meta, ...rest } = action;

  if (!callAPI) return next(action); // only for those action that has 'callApi' field

  const { url, params } = callAPI;
  const { reducerName } = meta;

  if (!url) throw new Error('Please, provide URL property inside the callApi field!');
  if (!reducerName) throw new Error('Please, provide reducerName inside the meta field!');

  let entityData = store.getState()[reducerName]; // get entity (e.g. enrolmentList) state
  const { offset, limit, isLoading } = entityData;

  console.info(`URL ${url} is loading. Reducer name: ${reducerName}. Action type: ${type}, params: ${params}`);
  if (isLoading) return next(action); // don't fetch if req already in process

  next({...rest, ...{ type: type + _START}});

  let queryParams = Object.assign({limit: limit || 300, offset: offset || 0}, params);

  fetch(BASIC_URL + url + serializeParams(queryParams), FETCH_OPTIONS)
    .then((response) => parseResponse(response))
    .then((response) => {
      next({...rest, ...{type: type + _SUCCESS}, ...response});
    })
    .catch((error) => {
      next({...rest, ...{type: type + _FAIL}, error})
    })
}