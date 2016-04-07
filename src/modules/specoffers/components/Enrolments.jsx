import React, {Component, PropTypes} from 'react';
import find from 'lodash/find'
import {createSelector} from 'reselect';
import {connect} from 'react-redux';
import {Table, Column, Cell} from 'fixed-data-table';
import {push} from 'react-router-redux';

import Loading from 'loading';
import * as dictConst from '../../dictionaries/constants';
import loadDictionaries from '../../dictionaries/actions';
import {decodeEnrolments} from '../../enrolments/helpers';
import {getEnrolmentIdByIndex} from '../helpers';

import {loadEnrolmentsListBySpecoffer, setFieldWidthEnrolments} from './../actions';
import {isDataForEnrolmentLoaded, decodeOneSpecoffer} from './../helpers';

class SpecofferEnrolments extends Component {
  constructor(props) {
    super(props);
  }

  _onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    this.props.setFieldWidthEnrolments(newColumnWidth, columnKey);
  }

  _goToDetailed = (e, index) => {
    let id = getEnrolmentIdByIndex(this.props.specofferId, index);
    this.props.goToDetailed(id);
  }

  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.ENROLMENTS_TYPES, dictConst.ENROLMENTS_STATUS_TYPES]);
    this.props.loadEnrolmentsListBySpecoffer({specofferId: this.props.specofferId});
  }

  render() {
    let {decodedEnrolments, enrolmentsFieldNames} = this.props;

    if (!isDataForEnrolmentLoaded(this.props.specofferId)) {
      return <Loading/>;
    }
    if (!decodedEnrolments.length) {
      return <div>Данних по данній пропозиції немає!</div>;
    }

    let cells = Object.keys(enrolmentsFieldNames).map((field) => {
      if (field === 'specOfferId') return null;
      return <Column
          columnKey={field}
          header={<Cell>{enrolmentsFieldNames[field].name}</Cell>}
          cell={props => (
            <Cell {...props}>
              {decodedEnrolments[props.rowIndex][field]}
            </Cell>
            )
          }
          isResizable
          width={enrolmentsFieldNames[field].width}
        />
    });

    return (
      <Table
        rowsCount={decodedEnrolments.length}
        rowHeight={50}
        headerHeight={70}
        onColumnResizeEndCallback={this._onColumnResizeEndCallback}
        isColumnResizing={false}
        onRowClick={this._goToDetailed}
        width={950}
        height={380}>
        {cells}
      </Table>
    );
  }
}

const mapStateToSpecofferEnrolments = createSelector(
  (state, ownProps) => state.specoffers.view.specofferEnrolments.data[ownProps.params.id],
  (state) => state.dictionaries,
  (state, ownProps) => ownProps.params.id,
  (state) => state.specoffers.view.specofferEnrolments.enrolmentsFieldNames,
  (enrolments, listOfDict, specofferId, enrolmentsFieldNames) => ({
    decodedEnrolments: decodeEnrolments(enrolments, listOfDict),
    specofferId: specofferId,
    enrolmentsFieldNames: enrolmentsFieldNames
  })
);

const mapDispatchToEnrolments = (dispatch) => (
  { loadEnrolmentsListBySpecoffer: (params) => dispatch(loadEnrolmentsListBySpecoffer(params)),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    setFieldWidthEnrolments: (newWidth, columnKey) => dispatch(setFieldWidthEnrolments(newWidth, columnKey)),
    goToDetailed: (id) => dispatch(push(`/enrolments/${id}/info`))
  }
);

export default connect(
  mapStateToSpecofferEnrolments,
  mapDispatchToEnrolments
)(SpecofferEnrolments);