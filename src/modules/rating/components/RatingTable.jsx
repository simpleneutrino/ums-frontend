'use strict';

import React, {Component, PropTypes} from 'react';
// import 'fixed-data-table/dist/fixed-data-table.min.css'
import FixedDataTable from 'fixed-data-table';
const {Table, Column, Cell} = FixedDataTable;
import findIndex from 'lodash/findIndex'

const CostomCell = ({rowIndex, data, field, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][field]}
  </Cell>
);

const rowClassNameGetter = (highlightedIndex) => (index, b) => {
  if (highlightedIndex === index)
    return 'row--higlighted';
};

export default class RatingTable extends Component {
  static propTypes = {
    ratingData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    size: PropTypes.number.isRequired,
    highlightedEnrolment: PropTypes.number
  };

  render() {
    let { ratingData, size, highlightedEnrolment } =  this.props;
    const highlightedIndex = findIndex(ratingData, {'enrolmentId': highlightedEnrolment});
    console.log('highlightedEnrolment', typeof highlightedEnrolment);
    console.log('size', typeof size);
    return (
      <Table
        rowHeight={50}
        scrollToRow={highlightedIndex}
        headerHeight={50}
        rowsCount={size}
        width={650}
        maxHeight={900}
        rowClassNameGetter={rowClassNameGetter(highlightedIndex)}
        {...this.props}>
        <Column
          header={<Cell>Призвіще</Cell>}
          cell={<CostomCell data={ratingData} field="surname"/>}
          flexGrow={2}
          width={200}
        />
        <Column
          header={<Cell>Імя</Cell>}
          cell={<CostomCell data={ratingData} field="firstname"/>}
          width={100}
        />
        <Column
          header={<Cell>По-батькові</Cell>}
          cell={<CostomCell data={ratingData} field="fathername"/>}
          width={150}
        />
        <Column
          header={<Cell>Бал</Cell>}
          cell={<CostomCell data={ratingData} field="kb"/>}
          width={100}
        />
        <Column
          header={<Cell>Пріоритет</Cell>}
          cell={<CostomCell data={ratingData} field="ratingPriority"/>}
          width={100}
        />
      </Table>
    );
  }
}