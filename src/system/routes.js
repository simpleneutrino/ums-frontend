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
import PageNotFound from '../modules/commons/PageNotFound';
import RatingRoute from '../modules/rating/routes';
import StatisticRoute from '../modules/statistics/route';

//configure permissions
export const routes = {
  persons: {
    login: 'admin',
    roles: ['ROLE_ADMIN'],
    groups: ['developers']
  },
  rating: {
    login: 'admin',
    roles: ['ROLE_ADMIN'],
    groups: ['developers']
  }
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
    {StatisticRoute}
    <Route path="persons" component={AuthContainer} AuthComponent={PersonsPage}/>
    {RatingRoute}
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
    <Route path="404" component={PageNotFound}/>
    <Redirect from='*' to='/404'/>
  </Route>
);
