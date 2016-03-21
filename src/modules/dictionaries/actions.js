import serializeParams from '../../utils/serializeParams'
import { LOAD_ } from '../../constants'
import { DICTIONARY_MAP, DICTIONARY } from './constants'

export function loadDictionaries(listOfDict) {
  return dispatch => {
    listOfDict.forEach((dicName) => {
      let { url, params, cache } = DICTIONARY_MAP[dicName];
      let action = {
        type: LOAD_ + DICTIONARY,
        callDicAPI: {
          url,
          params,
          cache
        },
        meta: {
          reducerName: 'dictionaries',
          collectionName: dicName
        }
      };
      dispatch(action)
    });
  }

}
