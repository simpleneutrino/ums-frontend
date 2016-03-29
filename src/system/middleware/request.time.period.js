import {REQUEST_API} from '../constants';
import {replaceTimePeriodId} from '../helpers';

export default store => next => action => {
  const {request, type} = action;
  
  if (type === REQUEST_API) {
    request.url = replaceTimePeriodId(request.url, store.getState().settings.timePeriodId);
  }

  return next(action);
};