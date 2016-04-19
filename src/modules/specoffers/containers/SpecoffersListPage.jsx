import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Input from 'react-bootstrap/lib/Input';
import Col from 'react-bootstrap/lib/Col';
import {Table, Column, Cell} from 'fixed-data-table';
import {push} from 'react-router-redux';

import Loading from 'loading';
import {loadSpecoffersList, setSpecofferFieldWidth, setFilterByName} from './../actions';
import {isDataForSpecoffersLoaded, decodeSpecoffers, getSpecofferIdByIndex, filteredByName} from './../helpers';
import * as dictConst from '../../dictionaries/constants';
import loadDictionaries from '../../dictionaries/actions';

class SpecoffersListPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {timePeriodId, limit} = this.props;
    this.props.loadDictionaries([dictConst.DEPARTMENTS, dictConst.SPECOFFERS_TYPES, dictConst.EDUCATION_FORM_TYPES]);
    this.props.loadSpecoffersList({timePeriodId, limit});
  }

  _onColumnResizeEndCallback = (newColumnWidth, columnKey) => {
    this.props.setSpecofferFieldWidth(newColumnWidth, columnKey);
  }

  _onClickRow = (e, index) => {
    let id = getSpecofferIdByIndex(index);
    this.props.goToDetailed(id);
  }

  _onFilterChange = (e) => {
    this.props.setFilterByName(e.target.value);
  }

  render() {
    let {decodedSpecoffers, specoffersFieldNames, filterByName} = this.props;
    if (!isDataForSpecoffersLoaded()) {
      return <Loading/>;
    }

    let cells = Object.keys(specoffersFieldNames).map((field) => {
      return <Column
          columnKey={field}
          header={<Cell>{specoffersFieldNames[field].name}</Cell>}
          cell={props => (
              <Cell {...props}>
                {decodedSpecoffers[props.rowIndex][field]}
              </Cell>
            )
          }
          isResizable
          width={specoffersFieldNames[field].width}
        />
    });

    return (
      <div>
        <Col xs={12} md={4}>
          <Input
            type="text"
            onChange={this._onFilterChange}
            placeholder="Знайти спеціальність"
            value={filterByName}
          />
        </Col>
        <Table
          rowsCount={decodedSpecoffers.length}
          rowHeight={50}
          headerHeight={50}
          onColumnResizeEndCallback={this._onColumnResizeEndCallback}
          isColumnResizing={false}
          onRowClick={this._onClickRow}
          width={window.innerWidth-20}
          height={window.innerHeight-140}
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
  (state) => state.specoffers.list.specoffersFieldNames,
  (state) => state.specoffers.list.filterByName,
  (list, listOfDict, query, specoffersFieldNames, filterByName) => ({
    decodedSpecoffers: decodeSpecoffers(filteredByName(list, filterByName), listOfDict),
    timePeriodId: query.timePeriodId,
    limit: query.limit,
    specoffersFieldNames: specoffersFieldNames,
    filterByName: filterByName
  })
);

const mapDispatchToSpecoffers = (dispatch) => (
  { loadSpecoffersList: (params) => dispatch(loadSpecoffersList(params)),
    loadDictionaries: (dicArray) => dispatch(loadDictionaries(dicArray)),
    setSpecofferFieldWidth: (newColumnWidth, columnKey) => dispatch(setSpecofferFieldWidth(newColumnWidth, columnKey)),
    goToDetailed: (id) => dispatch(push(`/specoffers/${id}/enrolments`)),
    setFilterByName: (name) => dispatch(setFilterByName(name))
  }
);

export default connect(
  mapStateToSpecoffers,
  mapDispatchToSpecoffers
)(SpecoffersListPage);