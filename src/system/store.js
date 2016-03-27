import {createStore, compose, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/reducers';
import thunk from 'redux-thunk';
import {default as request} from './middleware/request';

const middleware = [thunk, request];
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