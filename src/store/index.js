/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as middlewares from '../middleware'
import persistenceStore from '../persistence/store'
import * as storage from '../persistence/storage'
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../modules/reducers';

const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: {permissions: [/*'manage_account'*/]}
  }
};

const storeEnhancers = [
  persistenceStore
];

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('../components/devTools/DevTools').default;
  storeEnhancers.push(DevTools.instrument())
}

const storemiddlewareHistory = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(storemiddlewareHistory, thunk, ...middlewares),
  ...storeEnhancers
)(createStore);

function configureStore (initState) {

  const store = finalCreateStore(rootReducer, initState);
  storemiddlewareHistory.listenForReplays(store);

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../modules/reducers', () => {
      const nextRootReducer = require('./../modules/reducers').default;
      store.replaceReducer(nextRootReducer)
    });

  return store
}

const store = configureStore(initialState, storemiddlewareHistory);

export default store