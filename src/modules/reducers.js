import { default as enrolmentList } from './enrolment/list/reducer'
import { default as enrolmentView } from './enrolment/view/reducer'
import { default as dictionaries } from './dictionaries/reducer'
import { default as statistics } from './statistics/reducer'
import { default as application } from './application/reducer'
import { default as rating } from './rating/reducer'
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

console.log('dictionaries_reducer', dictionaries);
const rootReducer = combineReducers({
  enrolmentList,
  enrolmentView,
  dictionaries,
  statistics,
  application,
  rating,
  routing: routeReducer
});

export default rootReducer;
