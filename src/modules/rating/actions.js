import { SPECOFFER_CHOOSER, RATING } from './constants'
import { LOAD_ } from '../../constants'

export function loadSpecoffersChooser() {
  return {
    type: LOAD_ + SPECOFFER_CHOOSER,
    callDicAPI: {
      url: `/departments/timeperiods/8/specoffers`,
      cache: true
    },
    meta: {
      reducerName: RATING,
      collectionName: SPECOFFER_CHOOSER
    }
  }
}