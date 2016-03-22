/*global AmCharts :true*/
import React, {Component, PropTypes} from 'react'
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/pie'
import 'amcharts3/amcharts/themes/light'
import {connect} from 'react-redux'
import {loadStatistics} from './../../modules/statistics/actions'

const style = {width: 640, height: 400};

class chartFactory extends Component {
    static propTypes = {
        config: PropTypes.object.isRequired,
        collectionName: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    };

    renderChart() {
        let {config, data, id} = this.props;
        config.dataProvider = data.data;
        AmCharts.makeChart(id, config);
    }

    componentWillUnmount(){
        AmCharts.clear();
    }
    componentDidMount() {
        if (!this.props.data) {
            this.props.getData();
        }
    }

    render() {
        let {data, id} = this.props;
        if (!data) {
            return <div>Loading ...</div>
        }

        this.renderChart();
        return (
            <div id={id} style={style}/>
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
            dispatch(loadStatistics(ownProps.url, ownProps.collectionName));
        }
    };
};

export default connect(
    mapStateToChartFactory,
    mapDispatchToChartFactory
)(chartFactory);