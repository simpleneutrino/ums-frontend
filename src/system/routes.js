import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import Application from './../modules/Application';
import LoginPage from './../modules/auth/login/LoginPage';
import LogoutPage from './../modules/auth/logout/LogoutPage';
import AuthContainer from './../modules/auth/auth/AuthContainer';
import PersonsPage from './../modules/persons/PersonsPage';
import EnrolmentsPage from './../modules/enrolments/list/EnrolmentsListPage';
import ChartPage from './../modules/statistics/chart/ChartPage';

//configure permissions
export const routes = {
  persons: {
    login: 'admin',
    roles: ['ROLE_ADMIN'],
    groups: ['developers']
  }
};

export default (
  <Route component={Application} path="/">
    <IndexRedirect to="enrolments"/>
    <Route path='enrolments' component={EnrolmentsPage}/>
    <Route path="statistics" component={ChartPage}/>
    <Route path="persons" component={AuthContainer} AuthComponent={PersonsPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
  </Route>
);
