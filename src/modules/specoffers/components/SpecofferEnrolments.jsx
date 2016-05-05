import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import * as dictConst from '../../dictionaries/constants';
import loadDictionaries from '../../dictionaries/actions';
import {decodeEnrolments} from '../../enrolments/helpers';
import {loadEnrolmentsListBySpecoffer} from './../actions';
import {isDataForEnrolmentLoaded} from './../helpers';
import {getSpecofferEnrolmentsBySpecofferId} from '../reducers/view.js';
import Loader from 'loader'

class SpecofferEnrolments extends Component {

  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.ENROLMENTS_TYPES, dictConst.ENROLMENTS_STATUS_TYPES]);
    this.props.loadEnrolmentsListBySpecoffer({specofferId: this.props.specofferId});
  }

  render() {
    let {decodedEnrolments} = this.props;

    if (!decodedEnrolments.length) {
      return <div>Данних по данній пропозиції немає!</div>;
    }

    let options = {
      onRowClick: (row) => this.props.goToDetailed(row.id),
      sizePerPageList: [ 5, 10, 15, 20 ],
      sizePerPage: 10,
    };
    console.log('decodedEnrolments', decodedEnrolments);
    return (
      <Loader isLoading={!isDataForEnrolmentLoaded(this.props.specofferId)} isPageLoader>
        <BootstrapTable
          data={decodedEnrolments}
          options={options}
          striped hover condensed
          pagination search>
          <TableHeaderColumn width="50" dataField="id" isKey dataSort >№</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="personId" dataSort >Персона (id)</TableHeaderColumn>
          <TableHeaderColumn width="90" dataField="specOfferId" dataSort >Пропозиція (id)</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="isState" dataSort >Бюджет</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="isContract" dataSort >Контракт</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="departmentId" dataSort >Підрозділ</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="mark" dataSort >Загальний бал</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="isPrivilege" dataSort >Наявність пільг</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="docSeries" dataSort >Серія док.</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="docNum" dataSort >Номер док.</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="isHostel" dataSort >Потреб. гуртож</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="enrolmentTypeId" dataSort >Тип поступлення</TableHeaderColumn>
          <TableHeaderColumn width="70" dataField="isInterview" dataSort >Cпівбесіда</TableHeaderColumn>
        </BootstrapTable>
      </Loader>
    );
  }
}

const mapStateToSpecofferEnrolments = createSelector(
  (state, ownProps) => getSpecofferEnrolmentsBySpecofferId(state, ownProps.params.id),
  (state) => state.dictionaries,
  (state, ownProps) => ownProps.params.id,
  (enrolments, listOfDict, specofferId) => ({
    decodedEnrolments: decodeEnrolments(enrolments, listOfDict),
    specofferId: specofferId,
  })
);

const mapDispatchToEnrolments = (dispatch) => (
  { loadEnrolmentsListBySpecoffer: (params) => dispatch(loadEnrolmentsListBySpecoffer(params)),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    goToDetailed: (id) => dispatch(push(`/enrolments/${id}/info`))
  }
);

export default connect(
  mapStateToSpecofferEnrolments,
  mapDispatchToEnrolments
)(SpecofferEnrolments);