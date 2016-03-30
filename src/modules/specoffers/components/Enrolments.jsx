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
import {FIELD_NAMES} from '../../enrolments/constants';
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

  _onClickRow = (e, index) => {
    let id = getEnrolmentIdByIndex(this.props.specOfferId, index);
    this.props.onClickRow(id);
  }

  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.ENROLMENTS_TYPES, dictConst.ENROLMENTS_STATUS_TYPES]);
    this.props.loadEnrolmentsListBySpecoffer(this.props.specOfferId);
  }

  render() {
    let {decodedEnrolments, fieldWidth} = this.props;

    if (!isDataForEnrolmentLoaded(this.props.specOfferId)) {
      return <Loading/>;
    }
    if (!decodedEnrolments.length) {
      return <div>Данних по данній пропозиції немає!</div>;
    }

    let cells = FIELD_NAMES.map((item) => {
      if (item.field === 'specOfferId') return null;
      return <Column
          columnKey={item.field}
          header={<Cell>{item.name}</Cell>}
          cell={props => (
            <Cell {...props}>
              {decodedEnrolments[props.rowIndex][item.field]}
            </Cell>
            )
          }
          isResizable
          width={fieldWidth[item.field]}
        />
    });

    return (
      <Table
        rowsCount={decodedEnrolments.length}
        rowHeight={50}
        headerHeight={70}
        onColumnResizeEndCallback={this._onColumnResizeEndCallback}
        isColumnResizing={false}
        onRowClick={this._onClickRow}
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
  (state) => state.specoffers.view.specofferEnrolments.fieldWidth,
  (enrolments, listOfDict, specOfferId, fieldWidth) => ({
    decodedEnrolments: decodeEnrolments(enrolments, listOfDict),
    specOfferId: specOfferId,
    fieldWidth: fieldWidth
  })
);

const mapDispatchToEnrolments = (dispatch) => (
  { loadEnrolmentsListBySpecoffer: (specofferId) => dispatch(loadEnrolmentsListBySpecoffer(specofferId)),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    setFieldWidthEnrolments: (newWidth, columnKey) => dispatch(setFieldWidthEnrolments(newWidth, columnKey)),
    onClickRow: (id) => dispatch(push(`/enrolments/${id}/info`))
  }
);

export default connect(
  mapStateToSpecofferEnrolments,
  mapDispatchToEnrolments
)(SpecofferEnrolments);