import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import {isDataForSpecoffersLoaded, decodeOneSpecoffer} from './../helpers';
import loadDictionaries from '../../dictionaries/actions';
import * as dictConst from '../../dictionaries/constants';
import {loadOneSpecoffer} from '../actions'
import {getSpecofferInfoMain} from '../reducers/view.js'

export class SpecofferInfoMain extends Component {
  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS]);
    this.props.loadOneSpecoffer(this.props.specofferId);
  }

  render() {
    return <div>SpecofferInfoMain</div>;
  }
}

const mapStateToSpecofferInfoMain = createSelector(
  (state, ownProps) => getSpecofferInfoMain(state, ownProps.params.id),
  (state) => state.dictionaries,
  (state, ownProps) => ownProps.params.id,
  (specoffer, listOfDict, specofferId) => ({
    decodedOneSpecoffer: decodeOneSpecoffer(specoffer, listOfDict),
    specofferId: specofferId
  })
);

export default connect(
  mapStateToSpecofferInfoMain,
  {loadOneSpecoffer, loadDictionaries}
)(SpecofferInfoMain);