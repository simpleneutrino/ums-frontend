import {default as enrolmentList} from './../../modules/enrolments/reducer';
import {default as dictionaries} from '../../modules/dictionaries/reducer';
import {default as statistics} from './../../modules/statistics/reducer';
import {default as auth} from '../../modules/auth/reducer';
import config from './configReducer';
import {routeReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  enrolmentList,
  dictionaries,
  statistics,
  auth,
  config,
  routing: routeReducer
});

export default rootReducer;
