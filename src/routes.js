import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import store from './store';
import {LOG_OUT} from './constants';
import * as components from './components'

const {
  Application,
  Statistics,
  EnrolmentList,
  Persons
} = components;

export default (
  <Route component={Application}>
    <Redirect from="/" to="/enrolment/list"/>
    <Redirect from="/enrolment" to="/enrolment/list"/>
    <Route path="enrolment">
      <Route path='list' component={EnrolmentList}/>
    </Route>
    <Route path="statistics" component={Statistics}/>
    <Route path="persons" component={Persons}/>
    <Redirect from="/account" to="/account/profile"/>
    <Route path="logout" onEnter={logout}/>
  </Route>
);

function logout(nextState, replaceState) {
  store.dispatch({type: LOG_OUT});
  replaceState({}, '/login')
}
