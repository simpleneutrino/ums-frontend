import {createStore, compose, applyMiddleware} from 'redux'
import {browserHistory} from 'react-router';
import {syncHistory} from 'react-router-redux';
import rootReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import {default as request} from './middlewares/request';

const storemiddlewareHistory = syncHistory(browserHistory);
const middlewares = [storemiddlewareHistory, thunk, request];
const devMode = process.env.NODE_ENV === 'development';

if (devMode) {
  const createLogger = require(`redux-logger`);
  middlewares.push(createLogger());
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension && devMode ? window.devToolsExtension() : f => f
)(createStore);

function configureStore(initState) {
  const store = finalCreateStore(rootReducer, initState);
  storemiddlewareHistory.listenForReplays(store);

  if (module.hot)
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../system/reducers/reducers', () => {
      const nextRootReducer = require('./reducers/reducers').default;
      store.replaceReducer(nextRootReducer)
    });

  return store
}

const store = configureStore({}, storemiddlewareHistory);

export default store;