import {REQUEST_API} from '../constants';

/**
 *
 * @param config hash with url + true | false
 */
export default (config)=> {
  return store => next => action => {
    const {request, type} = action;

    if (type === REQUEST_API && request.cache === undefined) {
      request.cache = config[request.url];
    }

    return next(action);
  };
}