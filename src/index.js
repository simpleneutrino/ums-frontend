import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../assets/stylesheets/index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes}/>
      { getDevTools() }
    </div>
  </Provider>, document.getElementById('app')
);


function getDevTools() {
  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./components/devTools/DevTools').default;
    return <DevTools key="devtools"/>
  }
}


// TODO: implement auth. check this
//https://github.com/GetExpert/redux-blog-example/blob/102f95f823c153f5c213f4a2418dd7c1e210379e/app/routes/index.js
//function walk(routes, cb) {
//  cb(routes);
//
//  if (routes.childRoutes) {
//    routes.childRoutes.forEach(route => walk(route, cb));
//  }
//
//  return routes;
//}
//
//export default (store, client) => {
//  return walk(Route.createRouteFromReactElement(routes), route => {
//    route.onEnter = (nextState, transition) => {
//      const loggedIn = !!store.getState().auth.token;
//
//      if (route.requireAuth && !loggedIn) {
//        transition.to(...redirectBackAfter('/login', nextState));
//      } else if (client) {
//        fillStore(store, nextState, [route.component]);
//      }
//    };
//  });
//};
