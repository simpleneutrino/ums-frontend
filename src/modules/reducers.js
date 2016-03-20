import { default as enrolmentList } from './enrolment.list/reducer'
import { default as dictionaries } from './dictionaries/reducer'
import { default as statistics } from './statistics/reducer'
import { default as application } from './application/reducer'
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

console.log('dictionaries_reducer', dictionaries);
const rootReducer = combineReducers({
  enrolmentList,
  dictionaries,
  statistics,
  application,
  routing: routeReducer
});

export default rootReducer;
