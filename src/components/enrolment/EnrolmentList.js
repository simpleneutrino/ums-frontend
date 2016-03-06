'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEnrolments } from '../../actions/enrolment'
import { store } from '../../Root'
import GeneralTable from '../table/GeneralTable'

class EnrolmentList extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    console.log('EnrolmentList did mount!', store.getState())

    let { enrolment } = store.getState();
    console.log('Object.keys(enrolment)', Object.keys(enrolment))
    if (!Object.keys(enrolment).length) {
      this.props.loadAllEnrolments();
    }
    //checkAndLoadAllArticles()
  }
  render() {
    let { enrolment } = this.props.enrolment;

    return (
      <div>
        <ul>enrolment list</ul>
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

