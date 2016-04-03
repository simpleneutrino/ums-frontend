import React, { Component, PropTypes } from 'react';
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import 'ammap3';
import 'ammap3/ammap/themes/light.js';
import { connect } from 'react-redux';
import ukraineLow from './../components/UkraineMap';
import { STATISTICS_MAP as map } from './../constants';
import { loadStatistics } from '../actions';
import { fillMapWithData } from '../helpers';

class Chart extends Component {
  static propTypes = {
    children: PropTypes.any,
    dispatch: PropTypes.func,
    config: PropTypes.object.isRequired,
    chartId: PropTypes.string.isRequired,
    amChartConfig: PropTypes.object.isRequired,
    dataProvider: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.getChartData(this.props.chartId);
  }
  componentWillUnmount() {
    AmCharts.clear();
  }
  /**
   * when component is updated (rendered) - paste an amChart
   */
  componentDidUpdate(prevProps, prevState) {
    let { dataProvider } = this.props;
    if (dataProvider && dataProvider.data && !dataProvider.isLoading) {
      this.renderChart();
    }
  }
  /**
   * if chart changed - delete previous and request data for a next one.
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.chartId !== this.props.chartId) {
      AmCharts.clear();
      this.props.getChartData(nextProps.chartId);
    }
  }
  /**
   * merge amChart configs with data from a server (dataProvider)
   * amChartConfig - predefined configs (from constants) for amChart
   */
  renderChart() {
    let { dataProvider, chartId } = this.props;
    let { amChartConfig }  = this.props.config;
    if (amChartConfig.type === 'map') {
      AmCharts.maps.ukraineLow = ukraineLow;
      amChartConfig.listeners[0].method = fillMapWithData(dataProvider.data);
      AmCharts.makeChart(chartId, amChartConfig);
      return;
    }
    amChartConfig.dataProvider = dataProvider.data;
    AmCharts.makeChart(chartId, amChartConfig);
  }

  render() {
    let { dataProvider, chartId } = this.props;
    return (
      <div>
        <div> {this.addSpinner(dataProvider)}</div>
        <div id={chartId} className="amchart_div"></div>
      </div>
    );
  }

  addSpinner(dataProvider) {
    if (!dataProvider || dataProvider.isLoading) {
      return <div>Loading ...</div>;
    }
  }
}

/**
 *
 * @returns dataProvider - data for chart
 * @returns config - config fot this component
 * @returns chartId - id form route parameters
 **/
const mapStateToChartFactory = (state, ownProps) => {
  let { chartId } =  ownProps.params;
  let collectionName = map[chartId].callApi.collectionName || chartId;
  console.log('chartId', chartId);
  return {
    dataProvider: state.statistics[collectionName],
    config: map[chartId],
    chartId: chartId
  };
};

const mapDispatchToChartFactory = (dispatch) => {
  return {
    getChartData: (chartId) => {
      // get collection name for case then there are two chart depends on one API
      let collectionName = map[chartId].callApi.collectionName || chartId;
      dispatch(loadStatistics(map[chartId].callApi.url, collectionName))
    }
  };
};

export default connect(
  mapStateToChartFactory, mapDispatchToChartFactory
)(Chart);