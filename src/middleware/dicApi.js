import { _START, _SUCCESS, _FAIL, BASIC_URL, BASIC_AUTH, FETCH_OPTIONS } from '../constants'
import handleActionError from '../utils/handle-action-error'
import processResponse from '../utils/process-response'
import serializeParams from '../utils/serializeParams'
import 'whatwg-fetch'

export default store => next => action => {
  const { callDicAPI, type, meta, ...rest } = action;

  if (!callDicAPI) return next(action); // only for fetching dictionary!!
  const { url, params } = callDicAPI;
  const { reducerName, collectionName } = meta;

  //let { dictionaries } = store.getState();
  let collectionStore = store.getState()[reducerName];

  console.group();
  console.log('dicApi type', type);
  console.log('dicApi url', url);
  console.log('dicApi params', params);
  console.log('dicApi collectionStore', collectionStore);
  console.log('dicApi collectionStore[collectionName]', collectionStore[collectionName]);
  console.log(BASIC_URL + url + serializeParams(params));
  console.log('dicApi rest', rest);
  console.log('dicApi reducerName', reducerName);
  console.log('dicApi collectionName', collectionName);
  console.groupEnd();

  if (collectionStore[collectionName] && collectionStore[collectionName].resources &&
    collectionStore[collectionName].resources.length % 300 !== 0) {
    return next(action);// data was already loaded!
  }

  fetchDictionary(params);

  function fetchDictionary (queryParams = {}, limit = 300, offset = 0) {
    queryParams.limit = limit;
    queryParams.offset = offset;
    next({...rest, ...action, ...{type: type + _START}});

    fetch(BASIC_URL + url + serializeParams(queryParams), FETCH_OPTIONS)
      .then((response) => processResponse(response))
      .then((response) => {
        next({...rest, ...action, ...{type: type + _SUCCESS}, ...response});
        if (response.resources.length > limit) { // if there more data - fetch it as well;
          fetchDictionary(queryParams, limit, offset + limit);
        }
      })
      .catch((error) => {
        next({...rest, ...action, ...{type: type + _FAIL}, error})
      })
  }
}