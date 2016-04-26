import React from 'react';
import { shallow, render } from 'enzyme';
import { expect }  from 'chai';
import RatingTable from './RatingTable'
import ratingData from './../fixtures/ratingList'

describe('<RatingTable /> components', () => {
  
  let setup = () => {
    const shallowTable = shallow(<RatingTable {...ratingData}/>);
    
    return {
      shallowTable,
      tableProps: shallowTable.props()
    }
  };

  const renderedTable = render(<RatingTable {...ratingData}/>);
  
  it('should have 2 children (help btn + table itself)', () => {
    let { tableProps } = setup();
    expect(tableProps.children).to.have.length(2);
  });

  it('2nd row should be higlighet', () => {
    expect(renderedTable.find('.row--higlighted')).to.have.length(1);
  });

  it('have 4 rows - 1 for header and 3 for data', () => {
    expect(renderedTable.find('.fixedDataTableRowLayout_main.public_fixedDataTableRow_main')).to.have.length(4);
  });
});