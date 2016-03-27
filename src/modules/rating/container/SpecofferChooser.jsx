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

class SpecofferChooser extends Component {
  static propTypes = {
    specofferChooserData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
    let {specofferChooserData, departmentId} = this.props;
    if (!specofferChooserData.length) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <DepartmentsList specofferChooserData={specofferChooserData}/>
        <SpecoffersList specofferChooserData={specofferChooserData} departmentId={departmentId}/>
      </div>
    );
  }
}

const mapStateToSpecofferChooser = (state, ownProps) => {
  let { query } =  ownProps.location;
  return {
    specofferChooserData: state.rating.specofferChooser.resources,
    departmentId: query.departmentId,
    specofferId: query.specofferId
  };
};

export default connect(
  mapStateToSpecofferChooser,
  { loadSpecoffersChooser }
)(SpecofferChooser);