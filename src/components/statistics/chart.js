/*global AmCharts :true*/
import React, {Component, PropTypes} from 'react'
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/pie'
import 'amcharts3/amcharts/themes/light'
import {connect} from 'react-redux'

const style = {width: 640, height: 400};

class Chart extends Component {
  render() {
    let {dataProvider, id} = this.props;

    if (dataProvider) {
      this.renderChart();

      return (
        <div id={id} style={style}></div>
      );

    } else {
      return <div>Loading ...</div>
    }
  }

  renderChart() {
    let {config, dataProvider, id} = this.props;
    config.dataProvider = dataProvider.data;
    AmCharts.makeChart(id, config);
  }

  componentWillUnmount() {
    AmCharts.clear();
  }
}

Chart.propTypes = {
  config: PropTypes.object.isRequired,
  collection: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

const mapStateToChartFactory = (state, ownProps) => {
  return {
    dataProvider: state.statistics[ownProps.collection]
  }
};


export default connect(
  mapStateToChartFactory
)(Chart);