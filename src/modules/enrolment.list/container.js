'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEnrolments } from './actions'
//import GeneralTable from '../table/GeneralTable'

class EnrolmentList extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    let { enrolment } = this.props;
    console.log('Object.keys(enrolment)', Object.keys(enrolment));
    if (!Object.keys(enrolment).length) {
      this.props.loadAllEnrolments();
    }
  }
  render() {
    let { enrolment } = this.props;

    return (
      <div>
        <ul>enrolment list</ul>
        <ul>{enrolment}</ul>
        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => {
  const { enrolment } = state;
  return { enrolment }
}, {
  loadAllEnrolments
})(EnrolmentList)

