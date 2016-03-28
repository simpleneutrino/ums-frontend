import {combineReducers} from 'redux';
import {default as list} from './list/reducer';
import {default as view} from './view/reducer';

export default combineReducers({
  list,
  view
});