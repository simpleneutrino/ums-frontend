'use strict';

import React, {Component, PropTypes} from 'react';

export default class Rating extends React.Component {
  render () {
    const { SpecofferChooser, RatingList } = this.props;
    return (
      <div>
        <div className="SpecofferChooser">
          {SpecofferChooser}
        </div>
        <div className="RatingList">
          {RatingList}
        </div>
      </div>
    )
  }
}