import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import store from 'store';
import routes from './system/routes';
import '../assets/stylesheets/index.styl';
import 'bootstrap/dist/css/bootstrap.css';
import 'fixed-data-table/dist/fixed-data-table.min.css';
import {syncHistoryWithStore} from 'react-router-redux';
import {initLogin} from './modules/auth/helpers'

initLogin(store.dispatch);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>, document.getElementById('app')
);