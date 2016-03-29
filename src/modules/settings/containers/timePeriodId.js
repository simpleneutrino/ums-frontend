'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Input from 'react-bootstrap/lib/Input';
import { createSelector } from 'reselect';

import {TIMEPERIODS} from './../../dictionaries/constants';
import {isDictLoaded} from './../../dictionaries/helpers';
import loadDictionaries from './../../dictionaries/actions';
import {changeTimePeriodId} from './../widget';

class TimePeriodId extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadDictionaries([TIMEPERIODS]);
  }

  handleOptionChange = (event) => {
    this.props.sendTimePeriodId(event.target.value);
  }

  render() {

    let { isDictLoadedProp, timeperiods, timePeriodId } = this.props;

    if (!isDictLoadedProp) {
      return <div>loading...</div>;
    }

    const optionList = timeperiods.map((item, i) => {
      return <option value={i} key={i}>{item}</option>;
    });

    return (
      <div className="body">
        <Input type="select" label="Оберіть вступну кампанію"
               value={timePeriodId} onChange={this.handleOptionChange}>
          { optionList }
        </Input>
      </div>
    );
  }
}


TimePeriodId.propTypes = {
  children: PropTypes.any
};

// const mapStateToSettings = (state) => {
//   return {
//     dictionaries: state.dictionaries,
//     timePeriodId: state.settings.timePeriodId
//   };
// };

export const mapStateToSettings = createSelector(
  [ (state) => state.dictionaries,
   (state) => state.settings.timePeriodId],
  (dictionaries, timePeriodId) => ({
    isDictLoadedProp: isDictLoaded([TIMEPERIODS], dictionaries),
    timeperiods: dictionaries[TIMEPERIODS].resourcesMap,
    timePeriodId: timePeriodId
  })
)

const mapDispatchToSettings = (dispatch) => {
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
  mapDispatchToSettings
)(TimePeriodId);
