'use strict';

import React, {Component, PropTypes} from 'react';
import Help from '../components/Help'

export default class Rating extends React.Component {
  render () {
    const { SpecofferChooser, RatingList, SearchEnrolment } = this.props;
    return (
      <div className="rating">
        <div className="rating__specoffer-chooser">
          {SpecofferChooser}
        </div>
        <div className="rating__rating-list">
          <Help/>
          <div>{SearchEnrolment}</div>
          <div>{RatingList}</div>
        </div>
      </div>
    )
  }
}