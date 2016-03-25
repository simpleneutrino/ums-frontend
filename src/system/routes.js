import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import Application from './../components/Application';
import LoginPage from './../components/auth/ui/LoginPage';
import LogoutPage from './../components/auth/ui/LogoutPage';
import AuthContainer from './../components/auth/ui/AuthContainer';
import PersonsPage from './../components/persons/PersonsPage';
import EnrolmentsPage from './../components/enrolments/ui/EnrolmentsPage';
import StatisticsPage from './../components/statistics/ui/StatisticsPage';

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
    <Route path="statistics" component={StatisticsPage}/>
    <Route path="persons" component={AuthContainer} AuthComponent={PersonsPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
  </Route>
);
