//LOAD_DEPARTMENTS, LOAD_ENROLMENTS_TYPES, LOAD_ENROLMENTS_STATUS_TYPES
import { DICTIONARY_MAP, LOAD_, DICTIONARY } from './constants'
import { BASIC_URL } from '../../constants'
import store from '../../store'
import serializeParams from '../../utils/serializeParams'

export function loadDictionaries(listOfDict) {
  console.log('async3', listOfDict);

  listOfDict.forEach((dicName) => {
    let { url, params, cache } = DICTIONARY_MAP[dicName];
    let action = {
      type: LOAD_ + DICTIONARY,
      callDicAPI: {
        url,
        params,
        cache,
        dicName
      },
      dicName
    };
    store.dispatch(action)
  });
}