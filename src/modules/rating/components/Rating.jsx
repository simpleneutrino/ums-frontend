'use strict';

import React, {Component, PropTypes} from 'react';

export default class Rating extends React.Component {
  render () {
    const { SpecofferChooser, RatingList, SearchEnrolment } = this.props;
    return (
      <div className="rating">
        <div className="rating__specoffer-chooser">
          {SpecofferChooser}
        </div>
        <div className="rating__rating-list">
          <div>{SearchEnrolment}</div>
          <div>{RatingList}</div>
        </div>
      </div>
    )
  }
}