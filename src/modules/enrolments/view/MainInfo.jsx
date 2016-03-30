import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isDataForOneEnrolmentLoaded, decodeOneEnrolment} from './../helpers';
import Table from 'react-bootstrap/lib/Table';
import {loadEnrolmentById} from './../actions';
import loadDictionaries from '../../dictionaries/actions';
import {ENROLMENT_MAININFO_REDUCER} from './../constants';
import Loading from 'loading';
import {DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES} from  '../../dictionaries/constants';
import { createSelector } from 'reselect';

class MainInfo extends Component {
  static propTypes = {
    decodedEnrolment: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.dispatch(loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));
    this.props.dispatch(loadEnrolmentById(this.props.params.id));
  }

  render() {
    let { isDataLoaded, decodedEnrolment } = this.props;
    if (!isDataLoaded) {
      return <Loading/>;
    } else {
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
      );
    }
  }
}

MainInfo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

// const select = (state)=> {
//   return {
//     mainInfo: state.enrolments.view.mainInfo,
//     dictionaries: state.dictionaries
//   };
// };

export const getOneDecodedEnrolment = createSelector(
  [ (state, ownProps) => state.enrolments.view.mainInfo.data[ownProps.params.id],
   (state) => state.dictionaries,
   (state, ownProps) => ownProps.params.id],
  (mainInfo, listOfDict, enrolId) => ({
    decodedEnrolment: decodeOneEnrolment(mainInfo, listOfDict),
    isDataLoaded: isDataForOneEnrolmentLoaded(ENROLMENT_MAININFO_REDUCER, {'enrolId': enrolId})
  })
)

export default connect(getOneDecodedEnrolment)(MainInfo);