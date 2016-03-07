'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEnrolments } from './actions'
import { helpers, constants } from '../dictionaries'
//import GeneralTable from '../table/GeneralTable'
console.log('helpers', helpers);
let { loadDictionaries } = helpers;
let { DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES } = constants;

class EnrolmentList extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  componentDidMount() {
    let { enrolmentList } = this.props;
    console.log('Object.keys(enrolment)', enrolmentList);
    console.log('loadDictionaries', loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));

    if (!enrolmentList.isLoading) {
      this.props.loadAllEnrolments();
      this.props.loadAllEnrolments();
    }
  }
  render() {
    let { enrolmentList, dictionaries } = this.props;
    console.log('render enrolmentList', enrolmentList);
    console.log('render dictionaries', dictionaries);
    return (
      <div>
        <ul>enrolment list</ul>
        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => {
  const { enrolmentList, dictionaries } = state;
  return { enrolmentList, dictionaries }
}, {
  loadAllEnrolments
})(EnrolmentList)

