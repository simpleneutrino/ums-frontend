import React from 'react';
import { Route } from 'react-router';
import SpecoffersListPage from './containers/SpecoffersListPage';
import SpecofferEnrolments from './components/Enrolments';
import SpecofferInfoPage from './components/SpecofferInfoPage';
import SpecofferInfoMain from './components/SpecofferInfoMain';
import SpecofferBenefits from './components/SpecofferBenefits';
import SpecofferSubjects from './components/SpecofferSubjects';
import SpecofferWaves from './components/SpecofferWaves';
import Header from './components/Header.jsx';

export default (
  <Route>
    <Route path="specoffers/list" component={SpecoffersListPage}/>
    <Route path="specoffers/:id" components={{main: SpecofferInfoPage, header: Header}}>
      <Route path="enrolments" component={SpecofferEnrolments}/>
      <Route path='info' component={SpecofferInfoMain}/>
      <Route path='benefits' component={SpecofferBenefits}/>
      <Route path='subjects' component={SpecofferSubjects}/>
      <Route path='waves' component={SpecofferWaves}/>
    </Route>
  </Route>
);