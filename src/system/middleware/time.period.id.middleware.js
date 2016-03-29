import {TIMEPERIODID_CHANGED} from '../../modules/settings/widget';
import lcache from '../lcache';

export default store => next => action => {
  const {type} = action;

  if (type === TIMEPERIODID_CHANGED) {
    lcache.set('timePeriodId', action.payload.timePeriodId);
  }

  return next(action);
};