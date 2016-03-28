import {default as enrolments} from './../../modules/enrolments/reducer';
import {default as dictionaries} from '../../modules/dictionaries/reducer';
import {default as statistics} from './../../modules/statistics/reducer';
import {default as auth} from '../../modules/auth/reducer';
import {default as rating} from '../../modules/rating/reducer';
import {settings} from '../../modules/settings/widget';
import config from './configReducer';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  enrolments,
  dictionaries,
  statistics,
  auth,
  config,
  rating,
  settings,
  routing: routerReducer
});

export default rootReducer;
