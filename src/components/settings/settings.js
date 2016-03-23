'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Input from 'react-bootstrap/lib/Input';

import { dictActions, dictConstants } from './../../modules/dictionaries'
import { changeTimePeriodId } from './../../modules/application/actions'
import { isDataForSettingsLoaded } from './../../modules/application/helpers'

let { loadDictionaries } = dictActions;
let { TIMEPERIODS } = dictConstants;

class Settings extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDictionaries([TIMEPERIODS]);
  }

  handleOptionChange  = (event) => {
    this.props.sendTimePeriodId( event.target.value )
  }

  render() {

    if (!isDataForSettingsLoaded()) {
      return <div>load</div>
    }

    let { dictionaries, timePeriodId } = this.props;
    let timeperiods = dictionaries[TIMEPERIODS].resourcesMap;

    const optionList = timeperiods.map((item, i) => {
      return <option value = {i}>{item}</option>
    });

    return (
      <div className="body">
        <Input type="select" label="Оберіть вступну кампанію"
             value = {timePeriodId} onChange={this.handleOptionChange} >
          { optionList }
        </Input>
      </div>
    );
  }
}

const mapStateToSettings = (state) => {
  const { dictionaries, application } = state;
  return { dictionaries, timePeriodId: application.timePeriodId }
};

const mapDispatchToChartFactory = (dispatch) => {
  return {
    sendTimePeriodId: (val) => {
      dispatch(changeTimePeriodId(val));
    },
    getDictionaries: (dictionaries) => {
      dispatch(loadDictionaries(dictionaries));
    }
  };
};

export default connect(
  mapStateToSettings,
  mapDispatchToChartFactory
)(Settings)
