import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as dictConst from '../../dictionaries/constants';
import {loadEnrolments} from './../actions';
import loadDictionaries from '../../dictionaries/actions';
import {isDataForEnrolmentLoaded, decodeEnrolments} from '../helpers';
import Table from 'react-bootstrap/lib/Table';
import EnrolmentItem from './EnrolmentItem';
import Loading from '../../commons/Loading';
import {ENROLMENT_LIST_REDUCER} from './../constants';

class EnrolmentsListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {limit, offset} = this.props.enrolmentList;
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.ENROLMENTS_TYPES, dictConst.ENROLMENTS_STATUS_TYPES]);
    this.props.loadEnrolments({limit, offset});
  }

  render() {
    if (!isDataForEnrolmentLoaded(ENROLMENT_LIST_REDUCER)) {
      return <Loading/>;
    }

    let {enrolmentList, dictionaries} = this.props;
    let enrolments = decodeEnrolments(enrolmentList, dictionaries).map((item)=> {
      return <EnrolmentItem item={item} key={item.id}/>;
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
    );
  }
}

const select = (state)=> {
  return {
    enrolmentList: state.enrolments.list,
    dictionaries: state.dictionaries
  };
};

export default connect(select, {loadEnrolments, loadDictionaries})(EnrolmentsListPage);