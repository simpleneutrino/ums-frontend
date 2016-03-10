/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css'

import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import * as storage from './persistence/storage'
import * as components from './components'
import * as constants from './constants'
import { enrolmentListContainer } from './modules/enrolment.list'
import Statistics from './modules/statistics/container'
import Application  from './modules/main/Application'
import store from './store'

const {
  Account,
  AccountHome,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  Home,
  Login,
  SuperSecretArea
  } = components;

function getRootChildren(props) {
  const rootChildren = [
    <div key="uniq">
      {renderRoutes()}
    </div>
  ];
  if (__DEVTOOLS__) {
    const DevTools = require('./components/devTools/DevTools').default;
    rootChildren.push(<DevTools key="devtools"/>)
  }
  return rootChildren
}

function renderRoutes() {
  return (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Home}/>
        <Redirect from="/enrolment" to="/enrolment/list"/>
        <Route path="enrolment">
          <Route path='list' component={enrolmentListContainer}/>
        </Route>
        <Route path="statistics" component={Statistics}/>
        <Redirect from="/account" to="/account/profile"/>
        <Route path="stargazers" component={GithubStargazers}>
          <Route path=':username/:repo' component={GithubRepo}/>
          <Route path=':username' component={GithubUser}/>
        </Route>
        <Route path="account" component={Account} onEnter={requireAuth}>
          <Route path="profile" component={AccountHome}/>
          <Route path="secret-area" component={SuperSecretArea}/>
        </Route>
        <Route path="login" component={Login}/>
        <Route path="logout" onEnter={logout}/>
      </Route>
    </ReduxRouter>
  )
}

function requireAuth(nextState, replaceState) {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replaceState({
      nextPathname: nextState.location.pathname
    }, '/login')
}

function logout(nextState, replaceState) {
  store.dispatch({type: constants.LOG_OUT})
  replaceState({}, '/login')
}

class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
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

export default connect(({ application }) => ({application}))(Root)
