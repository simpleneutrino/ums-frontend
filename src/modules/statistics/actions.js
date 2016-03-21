import {
  LOAD_STATISTICS,
  STATISTICS_REDUCER } from './constants'

/**
 * ACTION CREATOR - dispatch action for fetching statistics data
 * @param url
 * @param statisticCollectionName
 * @returns {{type, callDicAPI: {url: *}, meta: {reducerName, collectionName: *}}}
 */
export function loadStatistics (url, statisticCollectionName) {
  return {
    type: LOAD_STATISTICS,
    callDicAPI: {
      url
    },
    meta: {
      reducerName: STATISTICS_REDUCER,
      collectionName: statisticCollectionName
    }
  }
}
