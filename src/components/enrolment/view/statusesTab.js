'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/lib/Table';

import { dictActions, dictConstants } from './../../../modules/dictionaries'
import { enrolHelpers } from './../../../modules/enrolment'
import { enrolConstants } from './../../../modules/enrolment'
import { loadEnrolmentById } from './../../../modules/enrolment/view/actions'
import { ENROLMENT_VIEW_REDUCER } from './../../../modules/enrolment/view/constants'

let {loadDictionaries} = dictActions;
let {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES
} = dictConstants;

let {
  isDataForEnrolmentLoaded,
  decodeOneEnrolment
} = enrolHelpers;


class Statuses extends Component {
  static propTypes = {
    children: PropTypes.any,
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {decodedEnrolment: null}
  }

  componentWillReceiveProps(nextProps, nextState) {
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    let {enrolmentView, dictionaries} = nextProps;
    if (isDataForEnrolmentLoaded(ENROLMENT_VIEW_REDUCER)) {
      this.setState({decodedEnrolment: decodeOneEnrolment(enrolmentView.resources, dictionaries, enrolConstants)})
    }
  }

  componentDidMount() {
    //debugger;
    this.props.getDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]);
    this.props.getEnrolment(this.props.id);
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
      <div>
        { decodedEnrolment }
      </div>
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
)(Statuses);