import store from '../../../store'
import { dictConstants } from '../../dictionaries'
import { isDictLoaded } from '../../dictionaries/helpers'

let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES } = dictConstants;

/**
 * check if data is loaded
 * @param storeState
 * @param reducerName
 * @returns {boolean}
 */
export function isEntityDataLoaded  (storeState, reducerName) {
  let entityData = storeState[reducerName];
  return !entityData.isLoading && entityData.loaded;
}

/**
 * check if enrolments loaded && dictionaries (used only inside enrolment list, view containers)
 * @param reducerName
 * @returns {*|boolean}
 */
export function isDataForEnrolmentLoaded  (reducerName) {
  let state = store.getState();
  return isDictLoaded([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES], state)
    && isEntityDataLoaded(state, reducerName)
}
