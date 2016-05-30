import React from 'react';
import {Route, IndexRedirect, Redirect} from 'react-router';
import Application from '../modules/Application';
import LoginPage from '../modules/auth/containers/LoginPage';
import LogoutPage from '../modules/auth/containers/LogoutPage';
import PersonsPage from '../modules/persons/PersonsPage';
import EnrolmentsPage from '../modules/enrolments/list/EnrolmentsListPage';
import MainInfo from '../modules/enrolments/view/MainInfo';
import Benefits from '../modules/enrolments/view/Benefits';
import Statuses from '../modules/enrolments/view/Statuses';
import Subjects from '../modules/enrolments/view/Subjects';
import InfoPage from '../modules/enrolments/view/InfoPage';
import PageNotFound from '../modules/commons/PageNotFound';
import RatingRoute from '../modules/rating/routes';
import StatisticsRoute from '../modules/statistics/route';
import Dictionaries from '../modules/dictionaries/route';
import SpecoffersRoute from '../modules/specoffers/routes';
import EnrolmentHeader from '../modules/enrolments/view/Header';

//configure permissions
export const REQUIRED_AUTH = ['/enrolments', '/persons', '/specoffers', '/specoffers/list'];

export default (
  <Route path="/" component={Application}>
    <IndexRedirect to="enrolments"/>
    <Route path='enrolments' component={EnrolmentsPage}/>
    <Route path="enrolments/:id" components={{main: InfoPage, header: EnrolmentHeader}}>
      <Route path='info' component={MainInfo}/>
      <Route path='benefits' component={Benefits}/>
      <Route path='subjects' component={Subjects}/>
      <Route path='statuses' component={Statuses}/>
    </Route>
    {StatisticsRoute}
    {Dictionaries}
    {SpecoffersRoute}
    <Route path="persons" component={PersonsPage}/>
    {RatingRoute}
    <Route path="login" component={LoginPage}/>
    <Route path="logout" component={LogoutPage}/>
    <Route path="404" component={PageNotFound}/>
    <Redirect from='*' to='/404'/>
  </Route>
);

