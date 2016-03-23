import {
  LOAD_STATISTICS,
  STATISTICS_REDUCER } from './constants'

/**
 * ACTION CREATOR - dispatch action for fetching statistics data
 * @param callApiData
 * @param statisticCollectionName
 * @returns {{type, callDicAPI: {url: *}, meta: {reducerName, collectionName: *}}}
 */
export function loadStatistics (callApiData, statisticCollectionName) {
  console.log('callApiData',callApiData );
  return {
    type: LOAD_STATISTICS,
    callDicAPI: callApiData,
    meta: {
      reducerName: STATISTICS_REDUCER,
      collectionName: statisticCollectionName
    }
  }
}
