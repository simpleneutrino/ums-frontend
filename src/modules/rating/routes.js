import React from 'react';
import { Route } from 'react-router';
import AuthContainer from '../auth/auth/AuthContainer';
import SpecofferChooser from './container/SpecofferChooser';
import RatingList from './container/RatingList';
import Rating from './components/Rating';
import SearchEnrolment from './container/SearchEnrolment';

export default (
    <Route component={AuthContainer} AuthComponent={Rating}>
      <Route path="rating" components={{SpecofferChooser, RatingList, SearchEnrolment}} />
    </Route>
);

