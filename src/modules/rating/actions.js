import {REQUEST_API} from '../../system/constants';
import * as types from './constants';

export function loadSpecoffersChooser() {
  return {
    type: REQUEST_API,
    request: {
      url: `/departments/timeperiods/8/specoffers`,
      shouldRequest: (state) => !!state.rating.specofferChooser.resources.length,
      actions: {
        start: {type: types.LOAD_SPECOFFER_CHOOSER_START},
        success: {type: types.LOAD_SPECOFFER_CHOOSER_SUCCESS},
        fail: {type: types.LOAD_SPECOFFER_CHOOSER_FAIL}
      }
    },
    meta: {
      reducerName: types.RATING
    }
  };
}
