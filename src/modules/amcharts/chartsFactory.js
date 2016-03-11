/*global AmCharts :true*/
import React, { Component, PropTypes } from 'react'
import  '../../../node_modules/amcharts3/amcharts/amcharts'
import '../../../node_modules/amcharts3/amcharts/serial'
import '../../../node_modules/amcharts3/amcharts/themes/light'
import { connect } from 'react-redux'
import { loadStatisticsIfNeeded } from '../statistics/actions'

const style = {width: 640, height: 400};

class chartFactory extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    collectionName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  renderChart() {
    let { config, data } = this.props;
    config.dataProvider = data;
    AmCharts.makeChart('chartdiv', config);
  }

  componentDidMount() {
    if (!this.props.data) {
      this.props.getData();
    }
  }

  render() {
    let { data } = this.props;
    if (!data) {
      return <div>Loading ...</div>
    }
    this.renderChart();

    return (
      <div id="chartdiv" style={style}/>
    );
  }
}

const mapStateToChartFactory = (state, ownProps) => {
  return {
    data: state.statistics[ownProps.collectionName]
  }
};

const mapDispatchToChartFactory = (dispatch, ownProps) => {
  return {
    getData: () => {
      dispatch(loadStatisticsIfNeeded(ownProps.url, ownProps.collectionName));
    }
  };
};

export default connect(
  mapStateToChartFactory,
  mapDispatchToChartFactory
)(chartFactory);