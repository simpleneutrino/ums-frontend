import { LOAD_STATISTICS, STATISRICS_REDUCER } from './constants'

export function loadStatistics () {
  return {
    type: LOAD_STATISTICS,
    callAPI: {
      key: 'statistics',
      reducerName: STATISRICS_REDUCER,
      url: `/priorities`
    }
  }
}
