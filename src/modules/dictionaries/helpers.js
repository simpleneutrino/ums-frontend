
export function isDictLoaded (listOfDict, storeState) {
  let dictState = storeState['dictionaries'];
  listOfDict.forEach((dicName) => {
    let dicData = dictState[dicName];
    if (dicData && (dicData.isLoading || !dicData.loaded || !dicData.resources.length)) {
      return false;
    }
  });
  return true;
}