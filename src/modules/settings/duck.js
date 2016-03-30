import lcache from '../../system/lcache';
export const TIMEPERIODID_CHANGED = 'TIMEPERIODID_CHANGED';

export function changeTimePeriodId(timePeriodId) {
  return {
    type: TIMEPERIODID_CHANGED,
    payload: {
      timePeriodId
    }
  };
}

export function settings(state = {timePeriodId: lcache.get('timePeriodId') || 8}, action = {}) {
  switch (action.type) {

    case TIMEPERIODID_CHANGED:
      return Object.assign({}, state,
        {
          timePeriodId: action.payload.timePeriodId
        }
      );

    default:
      return state;
  }
}
