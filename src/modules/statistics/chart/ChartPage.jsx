import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Chart from './Chart';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import {loadStatistics} from './../actions';

import {
  PRIORITIES,
  ALLOCATIONS_ADMINUNITS,
  ALLOCATIONS_DEPARTMENTS,
  STATISTICS_MAP as map
} from './../constants';

class ChartPage extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  componentDidMount() {
    //cache :-)
    this.props.dispatch(loadStatistics(map[ALLOCATIONS_ADMINUNITS].url, ALLOCATIONS_ADMINUNITS));
    this.props.dispatch(loadStatistics(map[ALLOCATIONS_DEPARTMENTS].url, ALLOCATIONS_DEPARTMENTS));
    this.props.dispatch(loadStatistics(map[PRIORITIES].url, PRIORITIES));
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Admin units">
            <Chart collection={ALLOCATIONS_ADMINUNITS} config={map[ALLOCATIONS_ADMINUNITS].chartConfig} id='units'/>
          </Tab>
          <Tab eventKey={2} title="Priorities">
            <Chart collection={PRIORITIES} config={map[PRIORITIES].chartConfig} id='priorities'/>
          </Tab>
          <Tab eventKey={3} title="Departments">
            <Chart collection={ALLOCATIONS_DEPARTMENTS} config={map[ALLOCATIONS_DEPARTMENTS].chartConfig}
                   id='departments'/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

ChartPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = (state)=> {
  return {
    statistics: state.statistics
  };
};

export default connect(select)(ChartPage);

