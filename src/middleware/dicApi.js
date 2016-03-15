import { _START, _SUCCESS, _FAIL, BASIC_URL, BASIC_AUTH, FETCH_OPTIONS } from '../constants'
import handleActionError from '../utils/handle-action-error'
import { parseResponse, normalizeResponse } from '../utils/process-response'
import serializeParams from '../utils/serializeParams'
import 'whatwg-fetch'

export default store => next => action => {
  const { callDicAPI, type, meta, ...rest } = action;

  if (!callDicAPI) return next(action); // only for fetching dictionary!!
  const { url, params } = callDicAPI;
  const { reducerName, collectionName } = meta;

  let collectionStore = store.getState()[reducerName];

  //console.group();
  //console.log('dicApi type', type);
  //console.log('dicApi url', url);
  //console.log('dicApi params', params);
  //console.log('dicApi collectionStore', collectionStore);
  //console.log('dicApi collectionStore[collectionName]', collectionStore[collectionName]);
  //console.log(BASIC_URL + url + serializeParams(params));
  //console.log('dicApi rest', rest);
  //console.log('dicApi reducerName', reducerName);
  //console.log('dicApi collectionName', collectionName);
  //console.groupEnd();

  if (collectionStore[collectionName] && collectionStore[collectionName].resources) {
    return next(action);// data was already loaded!
  }

  next({...rest, ...action, ...{type: type + _START}});

  let queryParams = Object.assign({limit: 300, offset: 0}, params);

  fetch(BASIC_URL + url + serializeParams(queryParams), FETCH_OPTIONS)
    .then((response) => parseResponse(response))
    .then((response) => normalizeResponse(response))
    .then((response) => {
      next({...rest, ...action, ...{type: type + _SUCCESS}, ...response});
    })
    .catch((error) => {
      next({...rest, ...action, ...{type: type + _FAIL}, error})
    })

}