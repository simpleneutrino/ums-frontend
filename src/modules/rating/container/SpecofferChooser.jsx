'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadSpecoffersChooser} from './../actions';
import find from 'lodash/find'
import DepartmentsList from './../components/DepartmentsList'
import SpecoffersList from './../components/SpecoffersList'
import { createSelector } from 'reselect';
import Loader from 'loader'

class SpecofferChooser extends Component {
  static propTypes = {
    departments: PropTypes.arrayOf(React.PropTypes.object).isRequired,
    specoffers: PropTypes.object,
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
    return (
        <Loader isLoading={!departments.length}>
          <DepartmentsList departments={departments}  departmentId={departmentId}/>
          {specoffers ? <SpecoffersList specoffers={specoffers.specoffers} departmentId={departmentId}/> : null}
        </Loader>
    );
  }
}

/**
 * departments, specoffers data to parse
 * departmentId, specofferId - picker ids
 * check this: https://twitter.com/dan_abramov/status/664581975764766721
 * and this: http://jaysoo.ca/2016/02/28/organizing-redux-application/#rule-2-create-strict-module-boundaries
 * for more informations
 */
const mapStateToRatingList = createSelector(
  (state) => state.rating.specofferChooser,
  (specofferChooser, ownProps) => ownProps.location.query,
  (specofferChooser, query) => ({
    departments: specofferChooser.resources,
    specoffers: find(specofferChooser.resources, {departmentId: parseInt(query.departmentId)}),
    departmentId: query.departmentId,
    specofferId: query.specofferId
  })
);


export default connect(
  mapStateToRatingList,
  { loadSpecoffersChooser }
)(SpecofferChooser);