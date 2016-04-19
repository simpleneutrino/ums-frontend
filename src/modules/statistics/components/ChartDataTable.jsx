import React, {Component, PropTypes} from 'react';
import Table from 'react-bootstrap/lib/Table';

export default class ChartDataTable extends Component {
  static propTypes = {
    chartData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    headers: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  render() {
    let {chartData, headers} = this.props;
    return (
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              {headers.map((headRow)=> <th>{headRow.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.talbeRows(chartData, headers)}
          </tbody>
        </Table>
    );
  }

  talbeRows = (chartData, headers) => {
    return chartData.map((dataRow)=> (
      <tr>
        { this.tableColumn(dataRow, headers) }
      </tr>
    ))
  }

  tableColumn = (dataRow, headers) => {
    return headers.map((headRow) => (
        <td key={headRow.key}>{dataRow[headRow.key]}</td>
    ))
  };
}