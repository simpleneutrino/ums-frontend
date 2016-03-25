import * as consts from './constants'
import {REQUEST_API} from '../../system/constants';

export default function loadDictionaries(listOfDict) {
  return dispatch => {
    listOfDict.forEach((dicName) => {
      let {url, params} = consts.DICTIONARY_MAP[dicName];
      //todo check state + cache

      dispatch({
        type: REQUEST_API,
        request: {
          url: url,
          actions: {
            start: {type: consts.DICTIONARY_LOAD_START},
            success: {type: consts.DICTIONARY_LOAD_SUCCESS},
            fail: {type: consts.DICTIONARY_LOAD_FAIL}
          },
          params
        },

        payload: {
          collectionName: dicName
        }
      });

    });
  }

}
