import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import store from 'store';
import routes from './system/routes';
import '../assets/stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes}/>
    </div>
  </Provider>, document.getElementById('app')
);