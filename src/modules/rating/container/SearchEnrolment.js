'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { getSuggestions } from '../helpers'
import { highlighEnrolment } from '../actions'


function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.surname} {suggestion.firstname} - {suggestion.kb}</span>
  );
}

class SearchEnrolment extends Component {
  static propTypes = {
    children: PropTypes.any,
    ratingList: PropTypes.object.isRequired,
    highlighEnrolment: PropTypes.func.isRequired
  };
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onSuggestionsUpdateRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.ratingList.resources)
    });
  }

  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({
      value: ''
    })
    this.props.highlighEnrolment(suggestion.enrolmentId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ratingList && nextProps.ratingList.resources.length) {
      this.setState({
        suggestions: nextProps.ratingList.resources
      })
    }
  }

  render() {
    let {value, suggestions} = this.state;

    const inputProps = {
      placeholder: 'Введіть прізвище',
      value,
      onChange: (event, { newValue }) => this.setState({ value: newValue })
    };

    return (
      <Autosuggest suggestions={suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={(suggestion) =>  suggestion.surname}
                   onSuggestionSelected={this.onSuggestionSelected}
                   renderSuggestion={renderSuggestion}
                   focusInputOnSuggestionClick={false}
                   inputProps={inputProps} />
    );
  }
}

const mapStateToSpecofferChooser = (state) => (
  { ratingList: state.rating.ratingList }
);
const mapDispatchToChartFactory = (dispatch) => (
  { highlighEnrolment: (enrolmentId) => dispatch(highlighEnrolment(enrolmentId)) }
);

export default connect(
  mapStateToSpecofferChooser,
  mapDispatchToChartFactory
)(SearchEnrolment);