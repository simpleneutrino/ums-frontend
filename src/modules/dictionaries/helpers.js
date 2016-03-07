//LOAD_DEPARTMENTS, LOAD_ENROLMENTS_TYPES, LOAD_ENROLMENTS_STATUS_TYPES
import { DICTIONARY_MAP, LOAD_, DICTIONARY } from './constants'
import { BASIC_URL } from '../../constants'
import store from '../../store'

export function loadDictionaries(listOfDict) {
  listOfDict.forEach((dicName) => {
    let { url, params, cache } = DICTIONARY_MAP[dicName];
    let action = {
      type: LOAD_ + DICTIONARY,
      callAPI: {
        key: 'dictionaries',
        url,
        params,
        cache
      },
      cache,
      dicName
    };
    console.log('loadDictionaries action', action);
    console.log('loadDictionaries dicName', dicName);
    store.dispatch(action)
  });
}