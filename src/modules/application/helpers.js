import store from '../../store'
import { TIMEPERIODS } from '../dictionaries/constants'
import { isDictLoaded } from '../dictionaries/helpers'

export function isDataForSettingsLoaded  () {
  let state = store.getState();
  return isDictLoaded([TIMEPERIODS], state)
}