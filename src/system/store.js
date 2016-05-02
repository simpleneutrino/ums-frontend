import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import {default as request} from './middleware/request';
import {default as auth} from './middleware/auth';
import {default as requestLocalStorage} from './middleware/request.localstorage.proxy';
import {default as requestTimePeriod} from './middleware/request.time.period';
import {default as requestCachePopulate} from './middleware/request.cache.populate';
import {default as timePeriodChange} from './middleware/time.period.id.middleware';
import {DICTIONARY_MAP} from '../modules/dictionaries/constants';
import {configToCache} from './helpers';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';


const middleware = [thunk,
  routerMiddleware(browserHistory),
  auth,
  requestCachePopulate(configToCache(DICTIONARY_MAP)),
  requestTimePeriod, requestLocalStorage, request,
  timePeriodChange
];

const devMode = process.env.NODE_ENV === 'development';

if (devMode) {
  const createLogger = require(`redux-logger`);
  middleware.push(createLogger());
}

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension && devMode ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initState) {
  const store = finalCreateStore(rootReducer, initState);

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../system/reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers').default;
      store.replaceReducer(nextRootReducer);
    });

  return store;
}

const store = configureStore({});

export default store;