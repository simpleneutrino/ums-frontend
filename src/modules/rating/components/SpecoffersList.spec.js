import React from 'react';
import { shallow } from 'enzyme';
import { expect }  from 'chai';
import SpecoffersList from './SpecoffersList'
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

describe('<SpecoffersList /> components', () => {

  let props = {
    departmentId: '221',
    specoffers: [ {
      'name' : 'Теst child',
      'specofferId' : 69
    }, {
      'name' : 'мікробіологія',
      'specofferId' : 70
    }, {
      'name' : 'екологія та охорона навколишнього середовища',
      'specofferId' : 142
    }, {
      'name' : 'фізіологія людини і тварин',
      'specofferId' : 143
    }]
  };

  let setup = () => {
    const component = shallow(<SpecoffersList {...props} />);

    return {
      component,
      props: component.props(),
      children: component.children(),
      firstChildren: component.find(NavItem).first(),
      Nav: component.find(Nav)
    }
  };

  it('should have 4 children: specoffer items in a list', () => {
    let { children } = setup();
    expect(children).to.have.length(4);
  });

  it('should render a text (specoffer name) for  a first NavItem', () => {
    let { firstChildren } = setup();
    expect(firstChildren.props().children).to.equal('Теst child')
  })
});