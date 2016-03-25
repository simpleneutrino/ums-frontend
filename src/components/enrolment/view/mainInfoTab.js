'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/lib/Table';

import { dictActions, dictConstants } from './../../../modules/dictionaries'
import { enrolHelpers, enrolConstants } from './../../../modules/enrolment'
import { isDataForEnrolmentLoaded } from './../../../modules/enrolment/view/helpers'
import { loadEnrolmentById } from './../../../modules/enrolment/view/actions'
import { ENROLMENT_VIEW_REDUCER } from './../../../modules/enrolment/view/constants'

let {loadDictionaries} = dictActions;
let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

let { decodeOneEnrolment } = enrolHelpers;


class MainInfoTab extends Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {decodedEnrolment: null}
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    let {enrolmentView, dictionaries} = nextProps;
    if (isDataForEnrolmentLoaded(ENROLMENT_VIEW_REDUCER)) {
      this.setState({decodedEnrolment: decodeOneEnrolment(enrolmentView.data, dictionaries, enrolConstants)})
    }
  }

  componentDidMount() {
    //debugger;
    console.log(this.props);
    this.props.getDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]);
    this.props.getEnrolment(this.props.params.id);
  }

  render() {

    if (!isDataForEnrolmentLoaded(ENROLMENT_VIEW_REDUCER)) {
      return <div>load</div>
    }

    let { enrolmentView, dictionaries } = this.props;
    let { decodedEnrolment } = this.state;
    console.log(this.props);
    // console.log('render: enrolmentList', enrolmentList);
    // console.log('render: dictionaries', dictionaries);
    // console.log('render: decodedEnrolment', decodedEnrolment);

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Поле</th>
          <th>Значення</th>
        </tr>
        </thead>
        <tbody>
          <tr><td>id</td><td>{decodedEnrolment.id}</td></tr>
          <tr><td>docSeries</td><td>{decodedEnrolment.docSeries}</td></tr>
          <tr><td>isInterview</td><td>{decodedEnrolment.isInterview}</td></tr>
          <tr><td>isState</td><td>{decodedEnrolment.isState}</td></tr>
          <tr><td>departmentId</td><td>{decodedEnrolment.departmentId}</td></tr>
          <tr><td>enrolmentTypeId</td><td>{decodedEnrolment.enrolmentTypeId}</td></tr>
        </tbody>
      </Table>
    )
  }
}

const mapStateToMainInfoTab = (state, ownProps) => {
  let { id } =  ownProps.params;
  return {
    enrolmentView: state.enrolmentView,
    dictionaries: state.dictionaries
  }
};

const mapDispatchToMainInfoTab = (dispatch) => {
  return {
    getEnrolment: (enrolId) => dispatch(loadEnrolmentById(enrolId)),
    getDictionaries: (dictionaries) => dispatch(loadDictionaries(dictionaries))
  };
};

export default connect(
  mapStateToMainInfoTab,
  mapDispatchToMainInfoTab
)(MainInfoTab);