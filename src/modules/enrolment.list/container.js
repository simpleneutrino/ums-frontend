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
    console.log('Object.keys(enrolment)', enrolmentList);
    if (!enrolmentList.isLoading) {
      this.props.loadAllEnrolments();
    }
  }
  render() {
    let { enrolmentList } = this.props;
    console.log('enrolmentList', enrolmentList);
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

