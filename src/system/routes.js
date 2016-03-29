import React from 'react';
import {Route, IndexRedirect, IndexRoute, Redirect} from 'react-router';
import Application from '../modules/Application';
import LoginPage from '../modules/auth/login/LoginPage';
import LogoutPage from '../modules/auth/logout/LogoutPage';
import AuthContainer from '../modules/auth/auth/AuthContainer';
import PersonsPage from '../modules/persons/PersonsPage';
import EnrolmentsPage from '../modules/enrolments/list/EnrolmentsListPage';
import MainInfo from '../modules/enrolments/view/MainInfo';
import Benefits from '../modules/enrolments/view/Benefits';
import Statuses from '../modules/enrolments/view/Statuses';
import Subjects from '../modules/enrolments/view/Subjects';
import InfoPage from '../modules/enrolments/view/InfoPage';
import Statistics from '../modules/statistics/components/Statistics';
import StatisticsIndex from '../modules/statistics/components/StatisticsIndex';
import Chart from '../modules/statistics/containers/Chart';
import SpecofferChooser from '../modules/rating/container/SpecofferChooser';

//configure permissions
export const routes = {
  persons: {
    login: 'admin',
    roles: ['ROLE_ADMIN'],
    groups: ['developers']
  },
  rating: {}
};

export default (
  <Route component={Application} path="/">
    <IndexRedirect to="enrolments"/>
    <Route path='enrolments' component={EnrolmentsPage}/>
    <Route path="enrolments/:id" component={InfoPage}>
      <Route path='info' component={MainInfo}/>
      <Route path='benefits' component={Benefits}/>
      <Route path='subjects' component={Subjects}/>
      <Route path='statuses' component={Statuses}/>
    </Route>
    <Route path="statistics" component={Statistics}>
      <IndexRoute component={StatisticsIndex}/>
      <Route path="chart/:chartId" component={Chart}/>
    </Route>
    <Route path="persons" component={AuthContainer} AuthComponent={PersonsPage}/>
    <Route path="rating" component={AuthContainer} AuthComponent={SpecofferChooser}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
    <Redirect from='*' to='/404'/>
  </Route>
);

