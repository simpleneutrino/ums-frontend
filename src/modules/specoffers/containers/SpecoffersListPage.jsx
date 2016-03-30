import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import {Table, Column, Cell} from 'fixed-data-table';
import {push} from 'react-router-redux';

import Loading from 'loading';
import {loadSpecoffersList, setFieldWidth} from './../actions';
import {isDataForSpecoffersLoaded, decodeSpecoffers, getSpecofferIdByIndex} from './../helpers';
import * as dictConst from '../../dictionaries/constants';
import loadDictionaries from '../../dictionaries/actions';
import {SPECOFFERS_LIST_REDUCER, FIELD_NAMES} from './../constants';

class SpecoffersListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {timePeriodId, limit} = this.props;
    this.props.loadDictionaries([dictConst.DEPARTMENTS]);
    this.props.loadSpecoffersList({timePeriodId, limit});
  }

  _onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    this.props.setFieldWidth(newColumnWidth, columnKey);
  }

  _onClickRow = (e, index) => {
    let id = getSpecofferIdByIndex(index);
    this.props.onClickRow(id);
  }

  render() {
    let {decodedSpecoffers, fieldWidth} = this.props;
    if (!isDataForSpecoffersLoaded(SPECOFFERS_LIST_REDUCER)) {
      return <Loading/>;
    }
    if (!decodedSpecoffers.length) {
      return <div>Данних немає!</div>;
    }

    let cells = FIELD_NAMES.map((item) => {
      return <Column
          columnKey={item.field}
          header={<Cell>{item.name}</Cell>}
          cell={props => (
              <Cell {...props}>
                {decodedSpecoffers[props.rowIndex][item.field]}
              </Cell>
            )
          }
          isResizable
          width={fieldWidth[item.field]}
        />
    });

    return (
      <div>
        <Table
          rowsCount={decodedSpecoffers.length}
          rowHeight={50}
          headerHeight={50}
          onColumnResizeEndCallback={this._onColumnResizeEndCallback}
          isColumnResizing={false}
          onRowClick={this._onClickRow}
          width={950}
          height={420}
          {...this.props}
        >
          {cells}
        </Table>
      </div>
    );
  }
}

SpecoffersListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  decodedSpecoffers: PropTypes.array.isRequired,
  timePeriodId: PropTypes.string.isRequired,
  limit: PropTypes.string.isRequired
};

const mapStateToSpecoffers = createSelector(
  (state) => state.specoffers.list,
  (state) => state.dictionaries,
  (state, ownProps) => ownProps.location.query,
  (state) => state.specoffers.list.fieldWidth,
  (list, listOfDict, query, fieldWidth) => ({
    decodedSpecoffers: decodeSpecoffers(list, listOfDict),
    timePeriodId: query.timePeriodId,
    limit: query.limit,
    fieldWidth: fieldWidth
  })
);

const mapDispatchToSpecoffers = (dispatch) => (
  { loadSpecoffersList: (params) => dispatch(loadSpecoffersList(params)),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    setFieldWidth: (newColumnWidth, columnKey) => dispatch(setFieldWidth(newColumnWidth, columnKey)),
    onClickRow: (id) => dispatch(push(`/specoffers/${id}/enrolments`))
  }
);

export default connect(
  mapStateToSpecoffers,
  mapDispatchToSpecoffers
)(SpecoffersListPage);