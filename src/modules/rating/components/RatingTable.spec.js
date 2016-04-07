import React from 'react';
import { shallow } from 'enzyme';
import { expect }  from 'chai';
import RatingTable from './RatingTable'
import ratingData from './../fixtures/ratingList'
import FixedDataTable from 'fixed-data-table';
const {Table, Column, Cell} = FixedDataTable;

describe('<RatingTable />', () => {

  it('renders <RatingTable /> components', () => {
    const table = shallow(<RatingTable ratingData={ratingData}
                                         size={ratingData.enrolments.length}/>);
    expect(table.find(Column)).to.have.length(5);
  });
});