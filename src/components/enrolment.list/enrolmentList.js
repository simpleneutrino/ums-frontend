'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllEnrolments } from './../../modules/enrolment.list/actions'
import { dictActions, dictConstants } from './../../modules/dictionaries'
import { enrolListHelpers } from './../../modules/enrolment.list'
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative'
  }
};

let { loadDictionaries } = dictActions;
let { DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES } = dictConstants;

let {
  isDataForEnrolmentLoaded,
  decodeEnrolments } = enrolListHelpers;


class EnrolmentList extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  constructor (props) {
    super(props);
    this.state = { decodedEnrolmentsList: null }
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    let { enrolmentList, dictionaries } = nextProps;
    if (isDataForEnrolmentLoaded()) {
      this.setState({ decodedEnrolmentsList: decodeEnrolments(enrolmentList.resources, dictionaries) })
    }
  }
  componentDidMount() {
    //debugger;
    this.props.loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]);
    this.props.loadAllEnrolments();
  }
  render() {

    if (!isDataForEnrolmentLoaded()) {
      return <RefreshIndicator
        size={50}
        left={70}
        top={0}
        loadingColor={"#FF9800"}
        status="loading"
        style={style.refresh}
      />
    }

    let { enrolmentList, dictionaries } = this.props;
    let { decodedEnrolmentsList } = this.state;
    console.log('render: enrolmentList', enrolmentList);
    console.log('render: dictionaries', dictionaries);
    console.log('render: decodedEnrolmentsList', decodedEnrolmentsList);
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
  loadAllEnrolments, loadDictionaries
})(EnrolmentList)

