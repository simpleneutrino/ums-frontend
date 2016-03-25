'use strict';

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadAllEnrolments} from './../../../modules/enrolment/list/actions'
import {dictActions, dictConstants} from './../../../modules/dictionaries'
import { enrolHelpers } from './../../../modules/enrolment'
import { isDataForEnrolmentLoaded } from './../../../modules/enrolment/list/helpers'
import { ENROLMENT_LIST_REDUCER } from './../../../modules/enrolment/list/constants'
import { enrolConstants } from './../../../modules/enrolment'

import Table from 'react-bootstrap/lib/Table';
import EnrolmentItem from './EnrolmentItem';


let {loadDictionaries} = dictActions;
let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

let { decodeEnrolments } = enrolHelpers;


class EnrolmentList extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {decodedEnrolmentsList: null}
  }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    let {enrolmentList, dictionaries} = nextProps;
    if (isDataForEnrolmentLoaded(ENROLMENT_LIST_REDUCER)) {
      this.setState({decodedEnrolmentsList: decodeEnrolments(enrolmentList.resources, dictionaries, enrolConstants)})
    }
  }

  componentDidMount() {
    //debugger;
    this.props.loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]);
    this.props.loadAllEnrolments();
  }

  render() {

    if (!isDataForEnrolmentLoaded(ENROLMENT_LIST_REDUCER)) {
      return <div>load</div>
    }

    let {enrolmentList, dictionaries} = this.props;
    let {decodedEnrolmentsList} = this.state;
    console.log(this.props);
    // console.log('render: enrolmentList', enrolmentList);
    // console.log('render: dictionaries', dictionaries);
    // console.log('render: decodedEnrolmentsList', decodedEnrolmentsList);

    let enrolments = decodedEnrolmentsList.map((item)=> {
      return <EnrolmentItem {...item}/>
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>id</th>
          <th>docSeries</th>
          <th>isInterview</th>
          <th>isState</th>
          <th>departmentId</th>
          <th>enrolmentTypeId</th>
        </tr>
        </thead>
        <tbody>
        {enrolments}
        </tbody>
      </Table>
    )
  }
}

const select = (state)=> {
  return {
    enrolmentList: state.enrolmentList,
    dictionaries: state.dictionaries
  }
};

export default connect(
  select,
  {
    loadAllEnrolments,
    loadDictionaries
  }
)(EnrolmentList);