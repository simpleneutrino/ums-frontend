import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {isDataForEnrolmentLoaded} from './helpers';
import {DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES} from  '../../dictionaries/constants';
import {loadEnrolmentById} from './../actions';
import loadDictionaries from '../../dictionaries/actions';
import {ENROLMENT_VIEW_REDUCER} from './constants';
import Loading from '../../commons/Loading';

export default class Benefits extends Component {
  componentDidMount() {
    this.props.dispatch(loadDictionaries([DEPARTMENTS, ENROLMENTS_TYPES, ENROLMENTS_STATUS_TYPES]));
    this.props.dispatch(loadEnrolmentById(this.props.params.id));
  }

  render() {
    if (isDataForEnrolmentLoaded(ENROLMENT_VIEW_REDUCER)) {
      return <div>Benefits</div>;

    } else {
      return <Loading/>;
    }
  }
}

Benefits.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = (state)=> {
  return {
    enrolmentView: state.enrolmentView,
    dictionaries: state.dictionaries
  };
};

export default connect(select)(Benefits);