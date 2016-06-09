'use strict';

import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import TABLE_STRUCTURE from './../constants';
import {
  DEPARTMENTS,
  ENROLMENTS_TYPES,
  ENROLMENTS_STATUS_TYPES,
  TIMEPERIODS,
  TABLE_STRUCTURE as structure
} from './../constants';

const HeaderCol = ({field}) => (
  <TableHeaderColumn width="50" dataField={field} dataSort >{field}</TableHeaderColumn>
);
const HeaderColFirst = ({field}) => (
  <TableHeaderColumn width="50" dataField={field} isKey dataSort >{field}</TableHeaderColumn>
);

export default class DictionaryTable extends React.Component {
  render () {
    let tableData = this.props.dicData.resources,
      dicName = this.props.dicName;
    let tableConstructor = structure[dicName];
    let cols = [];
    /*for (let i = 0; i < tableConstructor.length; i++) {
      if ( i === 0 ) {
        cols.push(<HeaderColFirst field={tableConstructor[i]} />);
      }
      cols.push(<HeaderCol field={tableConstructor[i]}  />);
    }*/
    console.log(this.props.dicData);
    return (
      <BootstrapTable
        data={tableData}
        striped hover condensed
        pagination search>
        <TableHeaderColumn width="50" dataField='id'  isKey dataSort >ID</TableHeaderColumn>
        <TableHeaderColumn width="50" dataField='name'  dataSort >Name</TableHeaderColumn>
        <TableHeaderColumn width="50" dataField='abbrName' dataSort >abbrName</TableHeaderColumn>
      </BootstrapTable>
    );
  }

}

