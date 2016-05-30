import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loadDictionaries  from '../actions';
import {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES,
  TIMEPERIODS,
  DICTIONARY_MAP as map
} from './../constants';
export default class DictionaryTable extends React.Component {
  componentDidMount() {
    if (this.props.params.dicName) {

    }
  }
  componentWillReceiveProps(nextProps) {
    //console.log(this.props);
    this.props.getDictionaryData([this.props.params.dicName]);
  }
  render () {

    return (
      <div>

      </div>
    )
  }
}
const mapStateToDictionary = (state) => {
  return {
    dictionaries: state.dictionaries,
  };
};

const mapDispatchToLoadDictionary = (dispatch) => {
  return {
    getDictionaryData: (dictionary) => {
      dispatch(loadDictionaries(dictionary))
    }

  };
};

export default connect(
  mapStateToDictionary,
  mapDispatchToLoadDictionary
)(DictionaryTable);

