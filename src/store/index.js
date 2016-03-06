/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'
import api from '../middleware/api'
import persistenceStore from '../persistence/store'
import * as reducers from './reducers'
import * as storage from '../persistence/storage'

console.log('reducers', reducers);

const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: {permissions: [/*'manage_account'*/]}
  }
};

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const createHistory = process.env.NODE_ENV === 'production' ?
  createHashHistory : createBrowserHistory;

const storeEnhancers = [
  persistenceStore,
  reduxReactRouter({ createHistory })
];

if (__DEVTOOLS__) {
  const DevTools = require('../components/devTools/DevTools').default;
  storeEnhancers.push(DevTools.instrument())
}

const finalCreateStore = compose(
  applyMiddleware(thunk, logger, api),
  ...storeEnhancers
)(createStore);

const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer
}, reducers));

function configureStore (initState) {

  const store = finalCreateStore(combinedReducer, initState);

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    });

  return store
}

const store = configureStore(initialState);

export default store