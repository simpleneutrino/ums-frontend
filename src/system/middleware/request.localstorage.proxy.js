import {REQUEST_API} from '../constants';
import {dispatchAction} from './helpers';

export default store => next => action => {
  const {request, type} = action;

  if (type === REQUEST_API) {
    const rest = sessionStorage.getItem(getKey(request));
    const {success} = request.actions;

    if (rest) {
      action.interrupt = ()=>true;
      dispatchAction(store.dispatch, success, ...JSON.parse(rest));
    } else {
      if (success !== null && request.cache) {
        request.actions.success = proxyDispatch.bind(this, request, store.dispatch, success);
      }
    }
  }

  return next(action);
};


function getKey(request) {
  const {url, method, params} = request;
  return JSON.stringify({url, method, params});
}

function proxyDispatch(request, dispatch, action, ...rest) {
  sessionStorage.setItem(getKey(request), JSON.stringify(rest));
  dispatchAction(dispatch, action, ...rest);
}