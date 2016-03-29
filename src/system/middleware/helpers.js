import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';

export function dispatchAction(dispatch, action, ...rest) {
  if (isFunction(action)) {
    let result = action(...rest);

    if (isFunction(result)) {
      result(dispatch);
    } else if (result) {
      dispatch(result);
    }
  } else if (isObject(action)) {
    dispatch(Object.assign(action, ...rest));
  }
}