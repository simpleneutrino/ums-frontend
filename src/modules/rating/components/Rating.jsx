'use strict';

import React, {Component, PropTypes} from 'react';

export default class Rating extends React.Component {
  render () {
    const { SpecofferChooser, RatingList } = this.props;
    return (
      <div>
        <div className="col-sm-4 SpecofferChooser">
          {SpecofferChooser}
        </div>
        <div className="col-sm-8 RatingList">
          {RatingList}
        </div>
      </div>
    )
  }
}