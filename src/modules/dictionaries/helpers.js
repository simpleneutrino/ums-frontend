import forEach from 'lodash/forEach';
/**
 * check whether a specific distionaries is loaded
 * @param listOfDict {Array} - array of dict
 * @param dictState {Object} - state
 * @returns {boolean}
 */
export function isDictLoaded(listOfDict, dictState) {
  if (!Object.keys(dictState).length) return false;

  console.log('dictState', dictState);
  listOfDict.forEach((dicName) => {
    let dicData = dictState[dicName];
    if (dicData && dicData.resources && (dicData.isLoading || !dicData.loaded || !dicData.resources.length)) {
      return false;
    }
  });

  return true;
}

/**
 *
 * @param data
 * @returns {Array}
 */
export function createDataMap(data) {
  let map = [];
  forEach(data, (item) => map[item.id] = item.name);
  return map;
}