'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadSpecoffersChooser} from './../actions';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import find from 'lodash/find'
import DepartmentsList from './../components/DepartmentsList'
import SpecoffersList from './../components/SpecoffersList'
import { createSelector } from 'reselect';

class SpecofferChooser extends Component {
  static propTypes = {
    departments: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    specoffers: PropTypes.object.isRequired,
    departmentId: PropTypes.string,
    specofferId: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadSpecoffersChooser();
  }

  render() {
    let {departments, departmentId, specoffers} = this.props;
    if (!departments.length) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <DepartmentsList departments={departments}  departmentId={departmentId}/>
        <SpecoffersList specoffers={specoffers} departmentId={departmentId}/>
      </div>
    );
  }
}
// TO COMPARE WITH CODE BELOW!
//const mapStateToSpecofferChooser = (state, ownProps) => {
//  let { query } =  ownProps.location;
//  return {
//    specofferChooserData: state.rating.specofferChooser.resources,
//    departmentId: query.departmentId,
//    specofferId: query.specofferId
//  };
//};

/**
 * departments, specoffers data to parse
 * departmentId, specofferId - picker ids
 * check this: https://twitter.com/dan_abramov/status/664581975764766721
 * and this: http://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-2-create-strict-module-boundaries
 * for more informations
 */
const mapStateToSpecofferChooser = createSelector(
  (state) => state.rating,
  (state, ownProps) => ownProps.location.query,
  (rating, query) => ({
    departments: rating.specofferChooser.resources,
    specoffers: find(rating.specofferChooser.resources, {departmentId: parseInt(query.departmentId)}),
    departmentId: query.departmentId,
    specofferId: query.specofferId
  })
);


export default connect(
  mapStateToSpecofferChooser,
  { loadSpecoffersChooser }
)(SpecofferChooser);