import React from 'react';
import { shallow, render } from 'enzyme';
import { expect }  from 'chai';
import RatingTable from './RatingTable'
import ratingData from './../fixtures/ratingList'

// TODO: try chai-enzyme for better experience;

describe('<RatingTable /> components', () => {


  let setup = () => {
    const shallowTable = shallow(<RatingTable
        ratingData={ratingData.enrolments}
        size={ratingData.enrolments.length}
        highlightedEnrolment={3}/>);
    
    return {
      shallowTable,
      tableProps: shallowTable.props()
    }
  };

  const renderedTable = render(<RatingTable
      ratingData={ratingData.enrolments}
      size={ratingData.enrolments.length}
      highlightedEnrolment={1}/>);
  
  it('should have 3 rows', () => {
    let { tableProps } = setup();
    expect(tableProps.rowsCount).to.equal(3);
  });

  it('should have 5 columns', () => {
    let { tableProps } = setup();
    expect(tableProps.children).to.have.length(5);
  });

  it('should pass 2nd row to scrollToRow propery', () => {
    let { tableProps } = setup();
    expect(tableProps.scrollToRow).to.equal(2);
  });


  it('2nd row should be higlighet', () => {
    expect(renderedTable.find('.row--higlighted')).to.have.length(1);
  });

  it('have 4 rows - 1 for header and 3 for data', () => {
    expect(renderedTable.find('.fixedDataTableRowLayout_main.public_fixedDataTableRow_main')).to.have.length(4);
  });
});