import React from 'react';
import { Route } from 'react-router';
import SpecofferChooser from './container/SpecofferChooser';
import RatingList from './container/RatingList';
import Rating from './components/Rating';
import SearchEnrolment from './container/SearchEnrolment';

export default (
    <Route component={Rating}>
      <Route path="rating" components={{SpecofferChooser, RatingList, SearchEnrolment}} />
    </Route>
);

