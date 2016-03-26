import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isDataForEnrolmentLoaded} from './helpers';
import {decodeOneEnrolment} from '../helpers';
import Table from 'react-bootstrap/lib/Table';
import {loadEnrolmentById} from './../actions';
import loadDictionaries from '../../dictionaries/actions';
import {ENROLMENT_VIEW_REDUCER} from './constants';
import Loading from '../../commons/Loading';
import {DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES} from  '../../dictionaries/constants';

export default class MainInfo extends Component {

  componentDidMount() {
    this.props.dispatch(loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));
    this.props.dispatch(loadEnrolmentById(this.props.params.id));
  }

  render() {
    if (isDataForEnrolmentLoaded(ENROLMENT_VIEW_REDUCER)) {
      let item = decodeOneEnrolment(this.props.enrolmentView.data, this.props.dictionaries);

      return (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Поле</th>
            <th>Значення</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>id</td>
            <td>{item.id}</td>
          </tr>
          <tr>
            <td>docSeries</td>
            <td>{item.docSeries}</td>
          </tr>
          <tr>
            <td>isInterview</td>
            <td>{item.isInterview}</td>
          </tr>
          <tr>
            <td>isState</td>
            <td>{item.isState}</td>
          </tr>
          <tr>
            <td>departmentId</td>
            <td>{item.departmentId}</td>
          </tr>
          <tr>
            <td>enrolmentTypeId</td>
            <td>{item.enrolmentTypeId}</td>
          </tr>
          </tbody>
        </Table>
      );
    } else {
      return <Loading/>;
    }
  }
}

MainInfo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = (state)=> {
  return {
    enrolmentView: state.enrolmentView,
    dictionaries: state.dictionaries
  };
};

export default connect(select)(MainInfo);