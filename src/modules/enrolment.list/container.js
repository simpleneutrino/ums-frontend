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
    let { enrolmentList } = this.props;
    console.log('Object.keys(enrolment)', Object.keys(enrolmentList));
    if (!Object.keys(enrolmentList).length) {
      this.props.loadAllEnrolments();
    }
  }
  render() {
    let { enrolmentList } = this.props;

    return (
      <div>
        <ul>enrolment list</ul>
        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => {
  const { enrolmentList } = state;
  return { enrolmentList }
}, {
  loadAllEnrolments
})(EnrolmentList)

