'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadSpecoffersChooser} from './actions';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

class SpecofferChooser extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('SpecofferChooser: nextProps', nextProps);
    console.log('SpecofferChooser: nextState', nextState);
  }

  componentDidMount() {
    console.log('SpecofferChooser DM!');
    this.props.loadSpecoffersChooser();
  }

  render() {
    let {rating} = this.props;
    console.log('SpecofferChooser rendr: this.props', this.props);
    if (!rating) {
      return <div>loading...</div>;
    }

    console.log(this.props);

    return (
      <div> SpecofferChooser
        <Tabs defaultActiveKey={2} position="left" tabWidth={2}>
          <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
          <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
          <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
        </Tabs>
      </div>
    );
  }
}

export default connect(
  state => ({rating: state.rating}),
  { loadSpecoffersChooser }
)(SpecofferChooser);