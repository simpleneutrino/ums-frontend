import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import {isDataForSpecoffersLoaded, decodeOneSpecoffer} from './../helpers';
import loadDictionaries from '../../dictionaries/actions';
import * as dictConst from '../../dictionaries/constants';
import {loadOneSpecoffer} from '../actions'

export class SpecofferInfoMain extends Component {
  componentDidMount() {
    this.props.loadDictionaries([dictConst.DEPARTMENTS]);
    this.props.loadOneSpecoffer(this.props.specOfferId);
  }

  render() {
    return <div>SpecofferInfoMain</div>;
  }
}

const mapStateToSpecofferInfoMain = createSelector(
  (state, ownProps) => state.specoffers.view.mainInfo.data[ownProps.params.id],
  (state) => state.dictionaries,
  (state, ownProps) => ownProps.params.id,
  (specoffer, listOfDict, specOfferId) => ({
    decodedOneSpecoffer: decodeOneSpecoffer(specoffer, listOfDict),
    specOfferId: specOfferId
  })
);

export default connect(
  mapStateToSpecofferInfoMain,
  {loadOneSpecoffer, loadDictionaries}
)(SpecofferInfoMain);