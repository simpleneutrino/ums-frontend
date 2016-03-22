import {createStore, compose, applyMiddleware} from 'redux'
import persistenceStore from '../persistence/store';
import * as storage from '../persistence/storage';
import {browserHistory} from 'react-router';
import {syncHistory} from 'react-router-redux';
import rootReducer from '../modules/reducers';
import thunk from 'redux-thunk';
import {api, dicApi, logger} from '../middleware';

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

const storemiddlewareHistory = syncHistory(browserHistory);

const finalCreateStore = compose(
    applyMiddleware(storemiddlewareHistory, thunk, api, dicApi, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
    ...storeEnhancers
)(createStore);

function configureStore(initState) {

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