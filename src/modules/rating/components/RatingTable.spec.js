import React from 'react';
import { shallow, render } from 'enzyme';
import { expect }  from 'chai';
import RatingTable,  {CostomCell}  from './RatingTable'
import ratingData from './../fixtures/ratingList'
import FixedDataTable from 'fixed-data-table';
const {Table, Column, Cell } = FixedDataTable;

// TODO: try chai-enzyme for better experience;

describe('<RatingTable /> components', () => {

  const table = shallow(<RatingTable ratingData={ratingData.enrolments}
                                     size={ratingData.enrolments.length}
                                     highlightedEnrolment={3}/>);

  it('should have 3 rows', () => {
    expect(table.props().rowsCount).to.equal(3);
  });

  it('should have 5 columns', () => {
    expect(table.props().children).to.have.length(5);
  });

  it('should pass 2nd row to scrollToRow propery', () => {
    expect(table.props().scrollToRow).to.equal(2);
  });

  it('2nd row should be higlighet', () => {
    const table = render(<RatingTable ratingData={ratingData.enrolments}
                                       size={ratingData.enrolments.length}
                                       highlightedEnrolment={3}/>);
    expect(table.find('.row--higlighted')).to.have.length(1);
  });

  it('have 4 rows - 1 for header and 3 for data', () => {
    const table = render(<RatingTable ratingData={ratingData.enrolments}
                                      size={ratingData.enrolments.length}/>);
    expect(table.find('.fixedDataTableRowLayout_main.public_fixedDataTableRow_main')).to.have.length(4);
  });
});