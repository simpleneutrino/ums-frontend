import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isDataForOneEnrolmentLoaded, decodeOneEnrolment} from './../helpers';
import Table from 'react-bootstrap/lib/Table';
import {loadEnrolmentById} from './../actions';
import loadDictionaries from '../../dictionaries/actions';
import {DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES} from  '../../dictionaries/constants';
import { createSelector } from 'reselect';
import Loader from 'loader'
import {getMainInfo} from './reducer';

class MainInfo extends Component {
  componentDidMount() {
    this.props.dispatch(loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));
    this.props.dispatch(loadEnrolmentById(this.props.params.id));
  }

  render() {
    let { isDataLoaded, decodedEnrolment } = this.props;
    
    return (
      <Loader isLoading={!isDataLoaded}>
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
            <td>{decodedEnrolment.id}</td>
          </tr>
          <tr>
            <td>docSeries</td>
            <td>{decodedEnrolment.docSeries}</td>
          </tr>
          <tr>
            <td>isInterview</td>
            <td>{decodedEnrolment.isInterview}</td>
          </tr>
          <tr>
            <td>isState</td>
            <td>{decodedEnrolment.isState}</td>
          </tr>
          <tr>
            <td>departmentId</td>
            <td>{decodedEnrolment.departmentId}</td>
          </tr>
          <tr>
            <td>enrolmentTypeId</td>
            <td>{decodedEnrolment.enrolmentTypeId}</td>
          </tr>
          </tbody>
        </Table>
      </Loader>
    );
  }
}

MainInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  decodedEnrolment: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  id: PropTypes.string.isRequired
};

export const getOneDecodedEnrolment = createSelector(
  [ (state, ownProps) => getMainInfo(state, ownProps),
   (state) => state.dictionaries,
   (state, ownProps) => ownProps.params.id],
  (mainInfo, listOfDict, enrolId) => ({
    decodedEnrolment: decodeOneEnrolment(mainInfo, listOfDict),
    isDataLoaded: isDataForOneEnrolmentLoaded({'enrolId': enrolId})
  })
)

export default connect(getOneDecodedEnrolment)(MainInfo);