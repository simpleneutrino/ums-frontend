'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Input from 'react-bootstrap/lib/Input';
import { TIMEPERIODS} from './../../dictionaries/constants';
import { isDictLoaded } from './../../dictionaries/helpers';
import loadDictionaries from './../../dictionaries/actions';
import { changeTimePeriodId } from './../widget';


class TimePeriodId extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func.isRequired
  };
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadDictionaries([TIMEPERIODS]);
  }

  handleOptionChange  = (event) => {
    this.props.sendTimePeriodId( event.target.value );
  }

  render() {

    console.log('isDictLoaded([TIMEPERIODS], this.props.dictionaries)',
      !!isDictLoaded([TIMEPERIODS], this.props.dictionaries) );
    if (!isDictLoaded([TIMEPERIODS], this.props.dictionaries)) {
      return <div>loading...</div>;
    }

    let { dictionaries, timePeriodId } = this.props;
    let timeperiods = dictionaries[TIMEPERIODS].resourcesMap;

    const optionList = timeperiods.map((item, i) => {
      return <option value = {i}>{item}</option>;
    });

    return (
      <div className="body">
        <Input type="select" label="Оберіть вступну кампанію"
             value = {timePeriodId} onChange={this.handleOptionChange}>
          { optionList }
        </Input>
      </div>
    );
  }
}


TimePeriodId.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToSettings = (state) => {
  console.log('state', state);
  return {
    dictionaries: state.dictionaries,
    timePeriodId: state.settings.timePeriodId
  };
};

const mapDispatchToChartFactory = (dispatch) => {
  return {
    sendTimePeriodId: (timePeriodId) => {
      dispatch(changeTimePeriodId(timePeriodId));
    },
    loadDictionaries: (dictList) => {
      dispatch(loadDictionaries(dictList));
    }
  };
};

export default connect(
  mapStateToSettings,
  mapDispatchToChartFactory
)(TimePeriodId);