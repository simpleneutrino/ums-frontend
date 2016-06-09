import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loadDictionaries  from '../actions';
import DictionaryTable  from '../components/DictionaryTable';
import {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES,
  TIMEPERIODS,
  DICTIONARY_MAP as map
} from './../constants';
export default class DictionaryList extends React.Component {
  componentDidMount() {
    if (this.props.params.dicName) {
      this.props.getDictionaryData(this.props.params.dicName);
    }
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.params.dicName && nextProps.params.dicName !== this.props.params.dicName) {
      this.props.getDictionaryData(this.props.params.dicName);
    }
  }
  render () {
    let dicName = this.props.params.dicName,
      dicData = this.props.dictionaries[dicName];
    return (
      <div>
        <DictionaryTable dicData={dicData} dicName={dicName}/>
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
)(DictionaryList);

