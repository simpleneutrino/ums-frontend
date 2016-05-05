'use strict';

import React, {Component, PropTypes} from 'react'
import SideBars from '../container/SideBars'
import ToggleSideBar from '../container/ToggleSideBar'
import '../styles/side-bar-right.styl'

export default class Rating extends React.Component {
  render() {
    const { SpecofferChooser, RatingList, SearchEnrolment, location } = this.props;
    return (
      <div className="rating" >
        <SideBars location={location}/>
        <div className="rating__specoffer-chooser">
          {SpecofferChooser}
        </div>
        <div className="rating__rating-list">
          <ToggleSideBar location={location}/>
          <div>{SearchEnrolment}</div>
          <div>{RatingList}</div>
        </div>
      </div>
    )
  }
}