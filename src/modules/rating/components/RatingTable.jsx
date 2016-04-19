'use strict';

import React, {Component, PropTypes} from 'react';
import FixedDataTable from 'fixed-data-table';
const {Table, Column, Cell} = FixedDataTable;
import findIndex from 'lodash/findIndex'
import classNames from 'classnames';

const CostomCell = ({rowIndex, data, field, ...props}) => (
  <Cell {...props}>
    {data[rowIndex][field]}
  </Cell>
);

const rowClassNameGetter = (highlightedIndex, stateCount) => (index) => {
  console.log('index', index);
  
  return classNames(
      {'row--higlighted': highlightedIndex === index},
      {'row--red-state-line': index + 1 === stateCount});
};

export default class RatingTable extends Component {
  static propTypes = {
    enrolments: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    size: PropTypes.number.isRequired,
    highlightedEnrolment: PropTypes.number
  };

  render() {
    let { enrolments, highlightedEnrolment, stateCount } =  this.props;
    const highlightedIndex = findIndex(enrolments, {'enrolmentId': highlightedEnrolment});
    return (
      <Table
        rowHeight={50}
        scrollToRow={highlightedIndex}
        headerHeight={50}
        rowsCount={enrolments.length}
        width={650}
        maxHeight={900}
        rowClassNameGetter={rowClassNameGetter(highlightedIndex, stateCount)}
        {...this.props}>
        <Column
          header={<Cell>Призвіще</Cell>}
          cell={<CostomCell data={enrolments} field="surname"/>}
          flexGrow={2}
          width={200}
        />
        <Column
          header={<Cell>Імя</Cell>}
          cell={<CostomCell data={enrolments} field="firstname"/>}
          width={100}
        />
        <Column
          header={<Cell>По-батькові</Cell>}
          cell={<CostomCell data={enrolments} field="fathername"/>}
          width={150}
        />
        <Column
          header={<Cell>Бал</Cell>}
          cell={<CostomCell data={enrolments} field="kb"/>}
          width={100}
        />
        <Column
          header={<Cell>Пріоритет</Cell>}
          cell={<CostomCell data={enrolments} field="ratingPriority"/>}
          width={100}
        />
      </Table>
    );
  }
}