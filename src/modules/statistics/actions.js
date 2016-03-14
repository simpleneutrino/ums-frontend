import { LOAD_STATISTICS, PRIORITIES, ALLOCATIONS_ADMINUNITS,
  ALLOCATIONS_DEPARTMENTS, STATISTICS_REDUCER } from './constants'
import { _START, _SUCCESS, _FAIL, BASIC_URL, BASIC_AUTH, FETCH_OPTIONS } from '../../constants'
import handleActionError from '../../utils/handle-action-error'
import processResponse from '../../utils/process-response'
import 'whatwg-fetch'

export function loadStatisticsIfNeeded(url, statisticCollectionName) {
  return (dispatch, getState) => {
    if (shouldFetchStatistics(getState(), statisticCollectionName)) {
      return dispatch(loadStatistics(url, statisticCollectionName));
    } else {
      return Promise.resolve();
    }
  };
}

function shouldFetchStatistics (state, collection) {
  const statisticItems = state[STATISTICS_REDUCER][collection];
  if (!statisticItems) {
    return true;
  } else if (statisticItems.isLoading) {
    return false;
  } else {
    return statisticItems.didInvalidate;
  }
}

function loadStatistics (url, collectionName) {
  return dispatch => {
    dispatch({type: LOAD_STATISTICS +_START, meta: { collectionName } });
    return fetch(BASIC_URL + url)
      .then(response => processResponse(response))
      .then(json => dispatch(receiveStatistics(json, collectionName)))
      .catch((error) => {
        dispatch({type: LOAD_STATISTICS + _FAIL, error, meta: { collectionName } })
      })
  };
}

function receiveStatistics (data, collectionName) {
  return {
    type: LOAD_STATISTICS + _SUCCESS,
    meta: { collectionName },
    payload: data
  }
}

//allocations/adminunits
//[ {
//  "adminUnit" : "ВІННИЦЬКА ОБЛАСТЬ/М.ВІННИЦЯ",
//  "adminUnitId" : 1330,
//  "entrantCount" : 111
//}, {
//  "adminUnit" : "ОДЕСЬКА ОБЛАСТЬ/М.ОДЕСА",
//  "adminUnitId" : 23095,
//  "entrantCount" : 81
//}, {
//  "adminUnit" : "ДНІПРОПЕТРОВСЬКА ОБЛАСТЬ/М.ДНІПРОПЕТРОВСЬК",
//  "adminUnitId" : 5109,
//  "entrantCount" : 1
//}, {
//  "adminUnit" : "М.КИЇВ",
//  "adminUnitId" : 41893,
//  "entrantCount" : 1
//} ]


// allocations/departments
//[ {
//  "name" : "Фізичний",
//  "departmentId" : 435,
//  "generalCount" : 158,
//  "awardsCount" : 0,
//  "benefitCount" : 0
//}, {
//  "name" : "Біологічний",
//  "departmentId" : 221,
//  "generalCount" : 8,
//  "awardsCount" : 0,
//  "benefitCount" : 0
//}, {
//  "name" : "Географічний",
//  "departmentId" : 242,
//  "generalCount" : 15,
//  "awardsCount" : 0,
//  "benefitCount" : 0
//}, {
//  "name" : "Геологічний",
//  "departmentId" : 264,
//  "generalCount" : 10,
//  "awardsCount" : 0,
//  "benefitCount" : 0
//}, {
//  "name" : "Філологічний",
//  "departmentId" : 451,
//  "generalCount" : 1,
//  "awardsCount" : 0,
//  "benefitCount" : 0
//}, {
//  "name" : "Економічний",
//  "departmentId" : 291,
//  "generalCount" : 4,
//  "awardsCount" : 1,
//  "benefitCount" : 0
//} ]

// /priorities
//[ {
//  "priority" : 12,
//  "count" : 10
//}, {
//  "priority" : 8,
//  "count" : 1
//}, {
//  "priority" : 1,
//  "count" : 18
//}, {
//  "priority" : 4,
//  "count" : 1
//}, {
//  "priority" : 0,
//  "count" : 5
//}, {
//  "priority" : 3,
//  "count" : 158
//}, {
//  "priority" : 5,
//  "count" : 1
//}, {
//  "priority" : 9,
//  "count" : 2
//} ]