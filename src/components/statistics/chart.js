/*global AmCharts :true*/
import React, { Component, PropTypes } from 'react'
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/pie'
import 'amcharts3/amcharts/themes/light'
import { connect } from 'react-redux'
import { loadStatistics } from './../../modules/statistics/actions'

import {
  STATISTICS_MAP as map
} from './../../modules/statistics/constants'

class Chart extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
    config: PropTypes.object.isRequired,
    chartId: PropTypes.string.isRequired,
    amChartConfig: PropTypes.object.isRequired,
    dataProvider: PropTypes.object.isRequired
  };

// https://github.com/reactjs/react-router
// /blob/fb192a707a84d0ae65a3afe0e2f2900e94a5fc9e/docs/guides/ComponentLifecycle.md
  componentDidMount() {
    console.log('componentDidMount Chart this.props', this.props);
    this.props.getChartData(this.props.chartId);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
    AmCharts.clear();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevProps', prevProps);
    let { dataProvider } = this.props;
    if (dataProvider || !dataProvider.isLoading) {
      this.renderChart();
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps nextProps', nextProps);
    if (nextProps.chartId !== this.props.chartId) {
      AmCharts.clear();
      this.props.getChartData(nextProps.chartId);
    }
  }

  renderChart() {
    let { amChartConfig, dataProvider, chartId } = this.props;
    amChartConfig.dataProvider = dataProvider.data;
    console.log('renderChart! amChartConfig', amChartConfig);
    AmCharts.makeChart(chartId, amChartConfig);
  }

  render() {
    let { dataProvider, chartId } = this.props;
    console.log('Chart rendering!! this.props', this.props);
    return (
        <div>
          <div> {this.addSpinner(dataProvider)}</div>
          <div id={chartId} className="amchart_div"></div>
        </div>
      );
  }

  addSpinner(dataProvider) {
    if (!dataProvider || dataProvider.isLoading) {
      return <div>Loading ...</div>
    }
  }
}

const mapStateToChartFactory = (state, ownProps) => {
  let { chartId } =  ownProps.params;
  return {
    dataProvider: state.statistics[chartId],
    config: map[chartId],
    amChartConfig: map[chartId].amChartConfig,
    chartId: chartId
  }
};

const mapDispatchToChartFactory = (dispatch, ownProps) => {
  return {
    getChartData: (chartId) => dispatch(loadStatistics(map[chartId].callApi, chartId))
  };
};


export default connect(
  mapStateToChartFactory, mapDispatchToChartFactory
)(Chart);
