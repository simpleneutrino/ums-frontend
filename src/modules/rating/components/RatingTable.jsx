'use strict';

import React, {Component, PropTypes} from 'react';
import FixedDataTable from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.min.css'
const {Table, Column, Cell} = FixedDataTable;


const CostomCell = ({rowIndex, data, field, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][field]}
  </Cell>
);

export default class RatingTable extends Component {
  static propTypes = {
    ratingList: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    size: PropTypes.number.isRequired
  };

  render() {

    let { ratingList, size } =  this.props;
    console.log('RatingTable: ratingList', ratingList);
    console.log('RatingTable: size', size);
    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={size}
        width={900}
        maxHeight={1000}
        {...this.props}>
        <Column
          header={<Cell>Призвіще</Cell>}
          cell={<CostomCell data={ratingList} field="surname" />}
          width={200}
          flexGrow={2}
          fixed
        />
        <Column
          header={<Cell>Імя</Cell>}
          cell={<CostomCell data={ratingList} field="firstname" />}
          width={100}
        />
        <Column
          header={<Cell>По-батькові</Cell>}
          cell={<CostomCell data={ratingList} field="fathername" />}
          flexGrow={1}
          width={150}
        />
        <Column
          header={<Cell>Бал</Cell>}
          cell={<CostomCell data={ratingList} field="kb" />}
          width={100}
        />
        <Column
          header={<Cell>Пріоритет</Cell>}
          cell={<CostomCell data={ratingList} field="ratingPriority" />}
          width={100}
        />
      </Table>
    );
  }
}