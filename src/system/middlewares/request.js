import * as requestAjax from 'superagent';
import {REQUEST_API} from '../constants';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';

export default store => next => action => {
  const {request, type, payload={}} = action;

  if (type !== REQUEST_API) {
    return next(action);
  }

  const {backendHost, token}= store.getState().config;
  const {url, headers={}, method='get', params} = request;
  const {start, success, fail} = request.actions;
  const sendType = method === 'get' ? 'query' : 'send';

  dispatchAction(store.dispatch, start, {payload: payload});

  const currentRequest = requestAjax[method](backendHost + url)
    .set('Authorization', token)
    .set('Accept', 'application/json');

  Object
    .keys(headers)
    .forEach(key=>currentRequest.set(key, headers[key]));

  currentRequest[sendType](params)
    .end((error, response) => {
      if (error) {
        dispatchAction(store.dispatch, fail, {error: error}, {payload: payload});
      } else {
        dispatchAction(store.dispatch, success, {response: response.body}, {payload: payload});
      }
    });
}


function dispatchAction(dispatch, action, ...rest) {
  if (isFunction(action)) {
    let result = action(...rest);

    if (isFunction(result)) {
      result(dispatch);
    } else {
      dispatch(result);
    }
  } else if (isObject(action)) {
    dispatch(Object.assign(action, ...rest));
  }
}