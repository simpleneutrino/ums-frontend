import {default as enrolmentList} from './../../components/enrolments/reducer'
import {default as dictionaries} from '../../components/dictionaries/reducer'
import {default as statistics} from './../../components/statistics/reducer'
import {default as auth} from '../../components/auth/reducer';
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
