import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {push} from 'react-router-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import {loadSpecoffersList} from './../actions';
import {isDataForSpecoffersLoaded, decodeSpecoffers, getSpecofferIdByIndex, filteredByName} from './../helpers';
import * as dictConst from '../../dictionaries/constants';
import loadDictionaries from '../../dictionaries/actions';
import Loader from 'loader'

class SpecoffersListPage extends Component {

  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.SPECOFFERS_TYPES, dictConst.EDUCATION_FORM_TYPES]);
    this.props.loadSpecoffersList();
  }

  render() {
    let {decodedSpecoffers} = this.props;

    let options = {
      onRowClick: (row) => this.props.goToDetailed(row.id),
      sizePerPage: 15,
    };

    return (
      <Loader isLoading={!isDataForSpecoffersLoaded()}>
        <BootstrapTable
          data={decodedSpecoffers}
          options={options}
          striped hover condensed
          pagination
          search>
          <TableHeaderColumn width="50" dataField="id" isKey dataSort >№</TableHeaderColumn>
          <TableHeaderColumn width="80" dataField="name" dataSort >Спеціальність</TableHeaderColumn>
          <TableHeaderColumn width="50" dataField="departmentId" dataSort >Підрозділ</TableHeaderColumn>
          <TableHeaderColumn width="120" dataField="specofferTypeId" dataSort >Тип пропозиції</TableHeaderColumn>
          <TableHeaderColumn width="40" dataField="docNum" dataSort >Номер ліцензії</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="weightCertificate" dataSort >weightCertificate</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="weightAward" dataSort >weightAward</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="educationFormTypeId" dataSort >Форма навч.</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="licCount" dataSort >Ліценз. обсяг</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="stateCount" dataSort >Держ. замовлення</TableHeaderColumn>
        </BootstrapTable>
      </Loader>
    );
  }
}

SpecoffersListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  decodedSpecoffers: PropTypes.array.isRequired,
  loadDictionaries: PropTypes.func.isRequired,
  goToDetailed: PropTypes.func.isRequired
};

const mapStateToSpecoffers = createSelector(
  (state) => state.specoffers.list,
  (state) => state.dictionaries,
  (list, listOfDict, specoffersFieldNames, filterByName) => ({
    decodedSpecoffers: decodeSpecoffers(filteredByName(list, filterByName), listOfDict),
  })
);

const mapDispatchToSpecoffers = (dispatch) => (
  { loadSpecoffersList: () => dispatch(loadSpecoffersList()),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    goToDetailed: (id) => dispatch(push(`/specoffers/${id}/enrolments`))
  }
);

export default connect(
  mapStateToSpecoffers,
  mapDispatchToSpecoffers
)(SpecoffersListPage);