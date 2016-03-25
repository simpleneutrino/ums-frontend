import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import store from './store';
import {LOG_OUT} from './constants';
import * as components from './components'

const {
  Application,
  Statistics,
  EnrolmentList,
  EnrolmentView,
  MainInfoTab,
  Benefits,
  Subjects,
  Statuses,
  Persons,
  StatisticsIndex,
  Chart
} = components;

export default (
  <Route component={Application}>
    <Redirect from="/" to="/enrolment/list"/>
    <Redirect from="/enrolment" to="/enrolment/list"/>
    <Route path="enrolment">
      <Route path='list' component={EnrolmentList}/>
      <Route path=":id" component={EnrolmentView}>
        <Route path='mainInfo' component={MainInfoTab}/>
        <Route path='benefits' component={Benefits}/>
        <Route path='subjects' component={Subjects}/>
        <Route path='statuses' component={Statuses}/>
      </Route>
    </Route>
    <Route path="statistics" component={Statistics}>
      <IndexRoute component={StatisticsIndex} />
      <Route path="chart/:chartId" component={Chart}/>
    </Route>
    <Route path="persons" component={Persons}/>
    <Route path="logout" onEnter={logout}/>
  </Route>
);

function logout(nextState, replaceState) {
  store.dispatch({type: LOG_OUT});
  replaceState({}, '/login')
}
